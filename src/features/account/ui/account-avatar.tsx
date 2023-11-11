import Image from "next/image";
import React from "react";
import { Button } from "@web/components/ui/button";
import { avatarImage } from "../../../../public/images";

function AccountAvatar() {
  return (
    <div className="flex flex-row items-center gap-5 ">
      <Image
        alt="avatar"
        src={avatarImage}
        // placeholder="blur"
        className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full shrink-0 lg:m-0"
      />

      <Button
        className="px-4 py-2 border-[#2F2F2F] text-white rounded hover:opacity-80 lg:block hidden"
        variant="outline"
      >
        🧺
      </Button>
    </div>
  );
}

export default AccountAvatar;
