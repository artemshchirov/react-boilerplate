import * as z from "zod";

const ROLES = [
  "Director",
  "Producer",
  "Cinematographer",
  "Colorist",
  "Production Designer",
  "Other",
] as const;

const ERROR_ROLE_REQUIRED = "You need to select a role.";

export const roleOnboardingValidationSchema = z.object({
  type: z.enum(ROLES),
});
