"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@web/components/ui/form";
import { Input } from "@web/components/ui/input";
import { Button } from "@web/components/ui/button";
import { paymentValidationSchema } from "../../model/payment-validation-schema";

function PaymentForm() {
  const form = useForm<z.infer<typeof paymentValidationSchema>>({
    resolver: zodResolver(paymentValidationSchema),
    defaultValues: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof paymentValidationSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormDescription className="text-xl font-bold">
          Payment Method
        </FormDescription>
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  placeholder="XXXX •••• •••• ••••"
                  maxLength={19}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="expirationDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiration Date</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="•••"
                    maxLength={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Proceed</Button>
      </form>
    </Form>
  );
}

export default PaymentForm;
