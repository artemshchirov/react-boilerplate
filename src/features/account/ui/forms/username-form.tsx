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
import { usernameValidationSchema } from "../../model/account-validation-schema";
import { cn } from "@web/shared/lib/utils";

function UsernameForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof usernameValidationSchema>>({
    resolver: zodResolver(usernameValidationSchema),
    defaultValues: {
      username: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof usernameValidationSchema>) {
    console.log(`Updated username:`, values.username);
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col sm:flex-row", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="mb-3 text-2xl font-normal">
                Username
              </FormLabel>
              <div className="flex flex-col sm:flex-row">
                <FormControl className="w-full sm:max-w-[348px]">
                  <Input
                    type="username"
                    {...field}
                    placeholder="Enter your username"
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

export default UsernameForm;
