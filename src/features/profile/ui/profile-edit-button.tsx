"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@web/components/ui/dialog";
import EditIcon from "@web/shared/components/icons/edit-icon";
import { Button } from "@web/components/ui/button";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { DialogHeader, DialogFooter } from "@web/components/ui/dialog";
import { Input } from "@web/components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
} from "../../../components/ui/form";
import ProfileEditForm from "./profile-edit-form";
import AvatarComponent from "./avatar-component";

interface Props {
  profile: any;
}

const ProfileEditButton = ({ profile }: Props) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="icon" className="h-[45px] w-[45px] bg-[#EEEEEE] group">
        <EditIcon className="group-hover:fill-current" />
      </Button>
    </DialogTrigger>
    <DialogContent className="p-5 pt-2.5 pb-3 lg:max-w-[630px] md:px-12 md:py-6 lg:px-24 lg:py-11 overflow-y-scroll max-h-[95vh]">
      <DialogHeader>
        <DialogTitle className="text-center text-2xl lg:text-3xl font-semibold color-[#1B1B1B]">
          Edit Profile
        </DialogTitle>
      </DialogHeader>
      <AvatarComponent
        className="mx-auto"
        name={profile.name}
        avatarUrl={profile.avatarUrl}
      />
      <ProfileEditForm profile={profile} />
      <DialogFooter>
        <DialogTrigger asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogTrigger>
        <DialogTrigger asChild>
          <Button type="submit">Save changes</Button>
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default ProfileEditButton;
