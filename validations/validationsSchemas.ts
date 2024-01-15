import { z } from "zod";




/**
 * Esquema para la validación de formularios.
 */
export const formSchema = z.object({
    /**
     * Validación del campo de nombre.
     * - Longitud mínima: 3 caracteres.
     * - Longitud máxima: 200 caracteres.
     * - Solo se permiten caracteres alfabéticos, espacios y acentos.
     */
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

    /**
     * Fecha field validation.
     * - Minimum length: 1 character.
     * - The field cannot be empty.
     */
    fecha: z.string().min(1, {
        message: "La fecha no puede estar vacía"
    }),

    /**
     * Comentarios field validation.
     * - Only alphanumeric characters and specific special characters are allowed.
     */
    comentarios: z.string().regex(/^[A-Za-z0-9.,'"\-;&@*$()?¿\s]*$/, "El texto solo debe contener caracteres alfanuméricos y los caracteres especiales permitidos")
});
