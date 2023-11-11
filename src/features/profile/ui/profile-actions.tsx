import React from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@web/components/ui/button";
import EditButton from "./profile-edit-button";
import ShareButton from "./share-button";

function ProfileActions() {
  return (
    <div className="flex min-w-max gap-[20px] justify-center pt-[30px] pb-[46px]">
      {/* <EditButton profile={user}/> */}
      <ShareButton />

      <Button className="h-[45px] w-auto  bg-[#2F2F2F] text-white">
        <PlusIcon /> Create Project
      </Button>
    </div>
  );
}

export default ProfileActions;
