"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../../../components/ui/input";

export const NameInput = () => (
  <div className="grid items-center grid-cols-4 gap-4">
    <Label htmlFor="name" className="text-right">
      Name
    </Label>
    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
  </div>
);

export const UsernameInput = () => (
  <div className="grid items-center grid-cols-4 gap-4">
    <Label htmlFor="username" className="text-right">
      Username
    </Label>
    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
  </div>
);
