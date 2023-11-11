import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { billingValidationSchema } from "../model/billing-validation-schema";

type FieldNames = keyof z.infer<typeof billingValidationSchema>;

interface Field {
  name: FieldNames;
  label: string;
  description?: string;
}

const fields: Field[] = [
  { name: "cardNumber", label: "Card Number" },
  { name: "expiryDate", label: "MM / YY" },
  { name: "cvc", label: "CVC" },
  { name: "zip", label: "ZIP" },
];

function ProfileForm() {
  const form = useForm<z.infer<typeof billingValidationSchema>>({
    resolver: zodResolver(billingValidationSchema),
    defaultValues: {
      cardNumber: "4242 4242 4242 4242",
      expiryDate: "12/24",
      cvc: "123",
      zip: "12345",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof billingValidationSchema>) {
    console.log("values:", values);
  }

  return <div>Stripe Form</div>;
}

export default ProfileForm;
