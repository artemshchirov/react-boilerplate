"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import Link from "next/link";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@web/components/ui/form";
import { Input } from "@web/components/ui/input";
import { Button } from "@web/components/ui/button";
import { forgotValidationSchema } from "../model/forgot-validation-schema";

type FieldNames = keyof z.infer<typeof forgotValidationSchema>;

interface Field {
  name: FieldNames;
  label: string;
}

const fields: Field[] = [{ name: "email", label: "Email *" }];

function ForgotForm() {
  const form = useForm<z.infer<typeof forgotValidationSchema>>({
    resolver: zodResolver(forgotValidationSchema),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof forgotValidationSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto my-auto w-max">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          {fields.map(({ name, label }) => (
            <FormField
              control={form.control}
              key={name}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">Send</Button>
        </form>
      </Form>
    </div>
  );
}

export default ForgotForm;
