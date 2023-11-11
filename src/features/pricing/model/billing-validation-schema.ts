import * as z from "zod";

const ERROR_CARD_INVALID_LENGTH = "Card Number should be 16 digits";
const ERROR_EXPIRY_INVALID_FORMAT = "Expiry Date should be in MM/YY format";
const ERROR_CVC_SHORT = "CVC should be at least 3 digits";
const ERROR_CVC_LONG = "CVC should not exceed 4 digits";
const ERROR_ZIP_SHORT = "ZIP should be at least 5 characters"; // Assuming US ZIP code

const cardNumberSchema = z
  .string()
  .trim()
  .length(16, { message: ERROR_CARD_INVALID_LENGTH });

const expiryDateSchema = z
  .string()
  .trim()
  .regex(/^(?:\d{2}\/\d{2})$/, { message: ERROR_EXPIRY_INVALID_FORMAT });

const cvcSchema = z
  .string()
  .trim()
  .min(3, { message: ERROR_CVC_SHORT })
  .max(4, { message: ERROR_CVC_LONG });

const zipSchema = z.string().trim().min(5, { message: ERROR_ZIP_SHORT });

export const billingValidationSchema = z.object({
  cardNumber: cardNumberSchema,
  expiryDate: expiryDateSchema,
  cvc: cvcSchema,
  zip: zipSchema,
});
