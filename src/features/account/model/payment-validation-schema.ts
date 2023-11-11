import * as z from "zod";

const ERROR_CARD_INVALID = "Card number should be exactly 16 digits";
const ERROR_EXPIRATION_INVALID = "Expiration date format should be MM/YY";
const ERROR_CVV_INVALID = "CVV should be exactly 3 digits";

export const paymentValidationSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .min(16, { message: ERROR_CARD_INVALID })
    .max(16, { message: ERROR_CARD_INVALID }),
  expirationDate: z.string().length(5, { message: ERROR_EXPIRATION_INVALID }),
  cvv: z
    .string()
    .trim()
    .min(3, { message: ERROR_CVV_INVALID })
    .max(3, { message: ERROR_CVV_INVALID }),
});
