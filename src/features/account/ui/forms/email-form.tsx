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
import { emailValidationSchema } from "../../model/account-validation-schema";
import { cn } from "@web/shared/lib/utils";

function EmailForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof emailValidationSchema>>({
    resolver: zodResolver(emailValidationSchema),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof emailValidationSchema>) {
    console.log(`Updated email:`, values.email);
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col sm:flex-row", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="mb-3 text-2xl font-normal">Email</FormLabel>
              <div className="flex flex-col sm:flex-row">
                <FormControl className="w-full sm:max-w-[348px]">
                  <Input
                    type="email"
                    {...field}
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage className="block sm:hidden" />
                <Button
                  className="mt-1 mr-auto sm:mt-0 sm:mr-0 sm:ml-auto min-w-max"
                  type="submit"
                >
                  Update
                </Button>
              </div>
              <FormMessage className="hidden sm:block" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default EmailForm;
