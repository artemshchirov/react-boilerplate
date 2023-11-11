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
import { loginValidationSchema } from "../model/login-validation-schema";

type FieldNames = keyof z.infer<typeof loginValidationSchema>;

interface Field {
  name: FieldNames;
  label: string;
}

const fields: Field[] = [
  { name: "email", label: "Email" },
  { name: "password", label: "Password" },
];

function LoginForm() {
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof loginValidationSchema>) {
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
          <Button type="submit">Sign In</Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
