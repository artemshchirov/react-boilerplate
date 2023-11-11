import * as z from "zod";

const ERROR_USERNAME_TOO_SHORT = "Username must be at least 2 characters.";
const ERROR_EMAIL_INVALID = "This is not a valid email.";
const ERROR_PASSWORD_TOO_SHORT = "Password must be at least 8 characters.";
const ERROR_PASSWORD_UPPERCASE =
  "Password must contain at least one uppercase letter.";
const ERROR_PASSWORD_LOWERCASE =
  "Password must contain at least one lowercase letter.";
const ERROR_PASSWORDS_DONT_MATCH = "Passwords don't match";

const hasUppercase = (value: string) => /[A-Z]/.test(value);
const hasLowercase = (value: string) => /[a-z]/.test(value);

const emailSchema = z
  .string()
  .trim()
  .min(1, { message: ERROR_EMAIL_INVALID })
  .email(ERROR_EMAIL_INVALID);
const passwordSchema = z
  .string()
  .trim()
  .min(8, { message: ERROR_PASSWORD_TOO_SHORT })
  .refine(hasUppercase, { message: ERROR_PASSWORD_UPPERCASE })
  .refine(hasLowercase, { message: ERROR_PASSWORD_LOWERCASE });
const confirmPasswordSchema = z.string().trim();

export const registerValidationSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((field) => field.password === field.confirmPassword, {
    message: ERROR_PASSWORDS_DONT_MATCH,
    path: ["confirmPassword"],
  });
