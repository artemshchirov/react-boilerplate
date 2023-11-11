"use client";

import React from "react";
import { Label } from "@radix-ui/react-label";
import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Switch } from "@web/components/ui/switch";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  Form,
  FormMessage,
} from "@web/components/ui/form";
import { Input } from "@web/components/ui/input";
import { profileEditValidationSchema } from "../model/profile-edit-validation-schema";
import { Textarea } from "../../../components/ui/textarea";
import type { User } from "../../../shared/lib/generate-mock-data";

interface Props {
  profile: User;
}

function ProfileEditForm({ profile }: Props) {
  const form = useForm<any>({
    // FIXME: any
    // const form = useForm<z.infer<typeof profileEditValidationSchema>>({
    resolver: zodResolver(profileEditValidationSchema),
    defaultValues: profile,
  });

  function onSubmit(values: z.infer<typeof profileEditValidationSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Location *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username *</FormLabel>
              <FormControl>
                <Input {...field} defaultValue={profile.username} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem className="grid-cols-4 gap-4">
              <FormLabel>Contact Email</FormLabel>
              <FormControl>
                <Input {...field} defaultValue={profile.contactEmail || ""} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field, fieldState }) => (
            <FormItem className="grid-cols-4 gap-4">
              <FormLabel htmlFor="bio">Bio</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Write about yourself..." />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-4 gap-y-5 lg:gap-y-4">
          <FormLabel>Social links</FormLabel>
          <FormField
            control={form.control}
            name="socialLinks.instagram"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile.instagramUrl || ""}
                    placeholder="Instagram"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="socialLinks.vimeo"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile.vimeoUrl || ""}
                    placeholder="Vimeo"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="socialLinks.imdb"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile.imdbUrl || ""}
                    placeholder="IMDb"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="socialLinks.facebook"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile.facebookUrl || ""}
                    placeholder="Facebook"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="socialLinks.twitter"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile.twitterUrl || ""}
                    placeholder="Twitter"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="socialLinks.website"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4">
                <FormControl>
                  <Input
                    {...field}
                    defaultValue={profile.websiteUrl || ""}
                    placeholder="Website"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="hire"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between mt-6 space-y-0">
              <div className="flex">
                <FormLabel className="text-base ">
                  Available for hire badge
                </FormLabel>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p>ℹ</p>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 drop-shadow-[0_0_10px_rgba(0,0,0,0.10)] bg-white opacity-95 backdrop-blur-[0.5px] rounded-lg mb-1.5">
                      <p className="font-medium text-sm color-[#2F2F2F]">
                        appears on your profile
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default ProfileEditForm;
