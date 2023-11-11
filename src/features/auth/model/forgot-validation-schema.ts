import * as z from "zod";

const ERROR_EMAIL_IS_NOT_EXIST = "This is not a valid email.";

export const forgotValidationSchema = z.object({
  email: z.string().trim(),
});
