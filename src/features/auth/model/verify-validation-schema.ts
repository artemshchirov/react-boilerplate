import * as z from "zod";

const ERROR_PASSWORD_IS_NOT_VALID = "This is not a valid password.";

export const verifyValidationSchema = z.object({
  password: z.string().trim(),
});
