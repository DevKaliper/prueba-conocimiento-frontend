import { z } from "zod";

const fechaMinima = new Date("1900-01-01");
const fechaMaxima = new Date(); // Fecha de hoy

export const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre completo es requerido",
    })
    .max(200, {
      message: "El nombre debería de ser de menos de 200 caracteres",
    })
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/,
      "La cadena solo debe contener caracteres alfabéticos, espacios en blanco y tildes"
    ),

    fecha: z.string().min(1, {
        message: "La fecha no puede estar vacía"
    }),

    comentarios: z.string().regex(/^[A-Za-z0-9.,'"\-;&@*$()?¿\s]*$/, "El texto solo debe contener caracteres alfanuméricos y los caracteres especiales permitidos")
});
