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
} from "@web/components/ui/form";
import { Input } from "@web/components/ui/input";
import { Button } from "@web/components/ui/button";
import { verifyValidationSchema } from "../model/verify-validation-schema";

type FieldNames = keyof z.infer<typeof verifyValidationSchema>;

interface Field {
  name: FieldNames;
  label: string;
}

const fields: Field[] = [{ name: "password", label: "Password" }];

function VerifyForm() {
  const form = useForm<z.infer<typeof verifyValidationSchema>>({
    resolver: zodResolver(verifyValidationSchema),
    defaultValues: {
      password: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof verifyValidationSchema>) {
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
          <Button type="submit">Verify</Button>
        </form>
      </Form>
    </div>
  );
}

export default VerifyForm;
