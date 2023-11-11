"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@web/shared/lib/utils";

import { Button } from "@web/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@web/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@web/components/ui/select";
import { toast } from "@web/components/ui/use-toast";
import { roleValidationSchema } from "../../model/account-validation-schema";

export function RoleForm({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof roleValidationSchema>>({
    resolver: zodResolver(roleValidationSchema),
  });

  function onSubmit(data: z.infer<typeof roleValidationSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col sm:flex-row", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="mb-3 text-2xl font-normal">Role</FormLabel>
              <div className="flex flex-col sm:flex-row">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full sm:max-w-[348px]">
                    <SelectTrigger>
                      <SelectValue placeholder="Select you role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="colorist">Colorist</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                  </SelectContent>
                </Select>
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

export default RoleForm;
