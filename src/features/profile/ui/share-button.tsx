import React from "react";
import { Button } from "@web/components/ui/button";
import ShareIcon from "@web/shared/components/icons/share-icon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@web/components/ui/dropdown-menu";

const ShareButton = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size="icon" className="h-[45px] w-[45px] bg-[#EEEEEE] group">
        <ShareIcon className="group-hover:fill-current" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className="w-56 p-0 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] absolute left-[-23px]"
      sideOffset={12}
    >
      <DropdownMenuGroup className="gap-[6px]">
        <DropdownMenuItem className="pt-[12px] pb-[8px] px-[16px] cursor-pointer ">
          <span>Copy Link (⏬ Examples)</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0 h-px bg-[#CBCBCB]" />

        <DropdownMenuItem className="py-[8px] px-[16px]  cursor-pointer ">
          <span>Share on Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0 h-px bg-[#CBCBCB]" />
        <DropdownMenuItem className="py-[8px] px-[16px]  cursor-pointer ">
          <span>Share on Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0 h-px bg-[#CBCBCB]" />
        <DropdownMenuItem className="py-[8px] px-[16px]  cursor-pointer ">
          <span>Mobile view (popup from screen bottom) in progress...</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default ShareButton;
