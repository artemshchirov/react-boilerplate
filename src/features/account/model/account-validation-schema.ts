import * as z from "zod";

const ERROR_EMAIL_INVALID = "Please enter a valid email address";
const ERROR_USERNAME_INVALID = "Username cannot be empty";
const ERROR_ROLE_INVALID = "Role cannot be empty";
const ERROR_PASSWORD_SHORT = "Password should be at least 8 characters";
const ERROR_PASSWORD_LONG = "Password should not exceed 64 characters";

export const emailValidationSchema = z.object({
  email: z.string().trim().email({ message: ERROR_EMAIL_INVALID }),
});

export const usernameValidationSchema = z.object({
  username: z.string().trim().min(1, { message: ERROR_USERNAME_INVALID }),
});

export const roleValidationSchema = z.object({
  role: z.string().trim().min(1, { message: ERROR_ROLE_INVALID }),
});

export const passwordValidationSchema = z.object({
  password: z
    .string()
    .trim()
    .min(8, { message: ERROR_PASSWORD_SHORT })
    .max(64, { message: ERROR_PASSWORD_LONG }),
});
