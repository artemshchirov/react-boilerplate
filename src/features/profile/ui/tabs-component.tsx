import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@web/components/ui/tabs";
import { Separator } from "@web/components/ui/separator";
import UserProjects from "@web/features/profile/ui/user-projects";
import type { User } from "../../../shared/lib/generate-mock-data";

interface Props {
  user: User;
}

function TabsComponent({ user }: Props) {
  return (
    <Tabs
      className="flex flex-col w-full overflow-x-hidden"
      defaultValue="projects"
    >
      <TabsList className="flex justify-start w-full overflow-x-auto [&>div]:flex-shrink-0  no-scrollbar">
        <TabsTrigger
          className="tracking-[-0.32px] font-normal text-[#2F2F2F] text-base leading-normal"
          value="projects"
        >
          Projects
        </TabsTrigger>
        <TabsTrigger
          className="tracking-[-0.32px] font-normal text-[#2F2F2F] text-base leading-normal"
          value="collections"
        >
          Collections
        </TabsTrigger>
        <TabsTrigger
          className="tracking-[-0.32px] font-normal text-[#2F2F2F] text-base leading-normal"
          value="saved"
        >
          Saved Projects
        </TabsTrigger>
        <TabsTrigger
          className="tracking-[-0.32px] font-normal text-[#2F2F2F] text-base leading-normal"
          value="about"
        >
          About
        </TabsTrigger>
      </TabsList>
      <Separator className="bg-[#DFDFDF] h-[1px] mt-[-1px] z-1" />
      <TabsContent value="projects">
        {user.projects ? (
          <UserProjects projects={user.projects} username={user.username} />
        ) : (
          <h2>404</h2>
        )}
      </TabsContent>
      <TabsContent value="collections">Collections</TabsContent>
      <TabsContent value="saved">Saved Projects</TabsContent>
      <TabsContent value="about">About</TabsContent>
    </Tabs>
  );
}

export default TabsComponent;
