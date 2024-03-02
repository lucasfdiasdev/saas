import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().refine(
    (value) => {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/;
      return passwordRegex.test(value);
    },
    {
      message:
        "Sua senha deve ter 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial.",
    }
  ),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, { message: "Seu nome deve ter 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().refine(
    (value) => {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/;
      return passwordRegex.test(value);
    },
    {
      message:
        "Sua senha deve ter 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial.",
    }
  ),
});
