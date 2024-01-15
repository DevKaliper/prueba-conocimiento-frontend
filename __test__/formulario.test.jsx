import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Formulario from "@/components/Formulario";

describe("Formulario", () => {
  const mockSetUsers = jest.fn();
  const mockUsers = [];

  beforeEach(() => {
    render(
      <Formulario
        setUsers={mockSetUsers}
        users={mockUsers}
      />
    );
  });

  it("debe renderizar todos los campos del formulario", () => {
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fecha de nacimiento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/comentarios/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("debe permitir la entrada de datos en los campos del formulario", () => {
    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByLabelText(/fecha de nacimiento/i), {
      target: { value: "1990-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/comentarios/i), {
      target: { value: "Un comentario" },
    });

    expect(screen.getByLabelText(/nombre completo/i).value).toBe("Juan Pérez");
    expect(screen.getByLabelText(/fecha de nacimiento/i).value).toBe(
      "1990-01-01"
    );
    expect(screen.getByLabelText(/comentarios/i).value).toBe("Un comentario");
  });

  it("debe llamar a setUsers cuando se envía el formulario con datos válidos", async () => {
    // Rellenar el formulario con datos válidos
    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByLabelText(/fecha de nacimiento/i), {
      target: { value: "1990-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/comentarios/i), {
      target: { value: "Un comentario" },
    });

    // Enviar el formulario
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    // Esperar a que se llame a setUsers
    await waitFor(() => {
      expect(mockSetUsers).toHaveBeenCalled();
    });
  });

    it("debe mostrar un mensaje de error si los datos del formulario no son válidos", async () => {
      // Rellenar el formulario con datos inválidos o dejar campos requeridos vacíos
      fireEvent.change(screen.getByLabelText(/nombre completo/i), {
        target: { value: "" },
      }); // Campo vacío
      
      
      fireEvent.change(screen.getByLabelText(/fecha de nacimiento/i), {
        target: { value: "" },
      }); // Campo vacío

      // Enviar el formulario
      fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

      // Verificar mensajes de error
      await waitFor(() => {
        expect(
          screen.getByText(/nombre completo es requerido/i)
        ).toBeInTheDocument();
        expect(
          screen.getByText(/La fecha no puede estar vacía/i)
        ).toBeInTheDocument();
      });
    });
  });
