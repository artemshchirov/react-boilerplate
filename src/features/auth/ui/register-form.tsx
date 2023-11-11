"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useStore } from "effector-react";
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
import { registerValidationSchema } from "../model/register-validation-schema";
// import { signInFx, signUpFx } from "../../../app/api/auth";
// import { $user, setUser } from "../../../context/user";
// import { withEffector } from "../../../context/with-effector";

type FieldNames = keyof z.infer<typeof registerValidationSchema>;

interface Field {
  name: FieldNames;
  label: string;
  description?: string;
}

const fields: Field[] = [
  { name: "email", label: "Email *" },
  {
    name: "password",
    label: "Password",

    description: "minimum 8 characters, at least one uppercase letter.",
  },
  { name: "confirmPassword", label: "Confirm Password" },
];

function RegisterForm() {
  const router = useRouter();
  // const user = useStore($user);
  // console.log("$user:", user);
  const form = useForm<z.infer<typeof registerValidationSchema>>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      email: "nextjs@example.com",
      password: "123456Aa",
      confirmPassword: "123456Aa",
    },
    mode: "onSubmit",
  });

  // async function onSubmit(values: z.infer<typeof registerValidationSchema>) {
  //   console.log("values:", values);
  //   try {
  //     const userData = await signUpFx({
  //       url: "/api/v1/auth/email/register",
  //       email: values.email,
  //       password: values.password,
  //     });

  //     const loginResponse: any = await signInFx({
  //       url: "/api/v1/auth/email/login",
  //       email: values.email,
  //       password: values.password,
  //     });
  //     console.log(loginResponse);
  //     if (!loginResponse) {
  //       console.log("No loginResponse");
  //       return;
  //     }

  //     setUser({
  //       name: loginResponse.user.name,
  //       email: loginResponse.user.email,
  //       userId: loginResponse.user.id,
  //     });

  //     router.push("/");
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  // }

  return (
    <div className="mx-auto my-auto w-max">
      {/* user: {JSON.stringify(user)} */}
      <Button>Continue with Google</Button>
      <Form {...form}>
        {/* <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}> */}
        {fields.map(({ name, label, description }) => (
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
                {description ? (
                  <FormDescription>{description}</FormDescription>
                ) : null}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Sign Up</Button>
        {/* </form> */}
        <div className="flex justify-center">
          <p className="text-sm text-[#636262] sm:text-sm">
            Already have an account?{" "}
            <Link className="font-bold text-[#0b0b1f]" href="/login">
              Login now
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm;
