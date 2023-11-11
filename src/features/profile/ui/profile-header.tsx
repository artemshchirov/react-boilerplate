import React from "react";
import { Badge } from "@web/components/ui/badge";
import AvatarComponent from "./avatar-component";
import VerifiedIcon from "@web/shared/components/icons/verified-icon";

const ProfileHeader = () => (
  <>
    <div className="w-max ml-auto mr-[20px] mb-px">
      <Badge variant="outline">
        <div className="w-[6px] h-[6px] mr-[6px] bg-[#5FC091] rounded-full" />
        Available for hire
      </Badge>
    </div>
    <div className="flex flex-col items-center gap-[24px]">
      {/* <AvatarComponent /> */}
      <div className="flex flex-col items-center gap-[12px]">
        <div className="flex gap-[4px] items-center">
          <h2 className="tracking-[-0.4px] font-medium text-[#2F2F2F] leading-normal text-xl">
            Dor Zammir
          </h2>
          <VerifiedIcon />
        </div>
        {/* TODO: font Artist Sans */}
        <p className="font-base text-[#2F2F2F] leading-6">Colorist</p>
      </div>
    </div>
  </>
);

export default ProfileHeader;
