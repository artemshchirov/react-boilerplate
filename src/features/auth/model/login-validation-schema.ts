import * as z from "zod";

const ERROR_EMAIL_IS_NOT_EXIST = "This is not a valid email.";
const ERROR_PASSWORD_IS_NOT_VALID = "This is not a valid password.";

export const loginValidationSchema = z.object({
  email: z.string().trim(),
  password: z.string().trim(),
});
