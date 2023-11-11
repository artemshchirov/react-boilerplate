import * as z from "zod";

const ERROR_REQUIRED = "This field is required.";
const ERROR_EMAIL_INVALID = "This is not a valid email.";
const ERROR_LINK_INVALID = "This is not a valid URL.";

const requiredString = z.string().min(1, { message: ERROR_REQUIRED });
const emailSchema = z.string().trim().email({ message: ERROR_EMAIL_INVALID });
const urlSchema = z
  .string()
  .trim()
  .url({ message: ERROR_LINK_INVALID })
  .optional();

export const profileEditValidationSchema = z.object({
  name: requiredString,
  location: requiredString,
  username: requiredString,
  email: emailSchema.optional(),
  bio: z.string().optional(),
  socialLinks: z.object({
    instagram: urlSchema.optional(),
    vimeo: urlSchema.optional(),
    imdb: urlSchema.optional(),
    facebook: urlSchema.optional(),
    twitter: urlSchema.optional(),
    website: urlSchema.optional(),
  }),
  hire: z.boolean(),
});

export type ProfileEditType = z.infer<typeof profileEditValidationSchema>;
