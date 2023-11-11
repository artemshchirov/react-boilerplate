"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@web/components/ui/sheet";
import { Separator } from "@web/components/ui/separator";
import { Button } from "@web/components/ui/button";
import avatarImg from "../../public/avatar.jpg";
import ProfileIcon from "./icons/profile-icon";
import SignoutButton from "./signout-button";

function HamburgerMenu({ isSearchOpen }: { isSearchOpen: boolean }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isNavOpen]);

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        {!isSearchOpen && (
          <Avatar
            className="w-[36px] h-[36px] bg-[#EEEEEE] flex items-center justify-center rounded-full overflow-hidden cursor-pointer"
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <AvatarImage alt="User avatar" src={avatarImg.src} />
            <AvatarFallback>
              <ProfileIcon />
            </AvatarFallback>
          </Avatar>
        )}
      </SheetTrigger>

      <SheetContent className="w-full mt-[76px]" side="left">
        <div className="grid  pt-[8px]">
          <div className="grid px-[16px] pt-[20px] pb-[16px]  cursor-pointer text-sm tracking-[-0.28px] font-semibold text-[#2F2F2F] leading-normal w-full">
            <SheetClose asChild>
              <Link
                href="/pricing"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Pricing
              </Link>
            </SheetClose>
          </div>
          <Separator className="border-b  border-[#E3E3E3]" />
          <div className="grid px-[16px] pt-[20px] pb-[16px]  cursor-pointer text-sm tracking-[-0.28px] font-normal text-[#2F2F2F] leading-normal w-full">
            <SheetClose asChild>
              <Link
                href="/profile"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                View Profile
              </Link>
            </SheetClose>
          </div>
          <Separator className="border-b border-[#E3E3E3]" />
          <div className="grid px-[16px] pt-[20px] pb-[16px]  cursor-pointer text-sm tracking-[-0.28px] font-normal text-[#2F2F2F] leading-normal w-full">
            <SheetClose asChild>
              <Link
                href="/projects"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Projects
              </Link>
            </SheetClose>
          </div>
          <Separator className="border-b border-[#E3E3E3]" />
          <div className="grid px-[16px] pt-[20px] pb-[16px]  cursor-pointer text-sm tracking-[-0.28px] font-normal text-[#2F2F2F] leading-normal w-full">
            <SheetClose asChild>
              <Link
                href="/collections"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Collections
              </Link>
            </SheetClose>
          </div>
          <Separator className="border-b border-[#E3E3E3]" />
          <div className="grid px-[16px] pt-[20px] pb-[16px]  cursor-pointer text-sm tracking-[-0.28px] font-normal text-[#2F2F2F] leading-normal w-full">
            <SheetClose asChild>
              <Link
                href="/settings"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Account Settings
              </Link>
            </SheetClose>
          </div>
          <Separator className="border-b border-[#E3E3E3]" />
        </div>
        <SheetFooter>
          <div className="px-[16px] mt-[30px] py-[8px] w-full">
            <SignoutButton />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default HamburgerMenu;
