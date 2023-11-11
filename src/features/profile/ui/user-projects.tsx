import Image from "next/image";
import Link from "next/link";
import { Button } from "@web/components/ui/button";
import ShareMobileIcon from "@web/shared/components/icons/share-mobile-icon";
import { AspectRatio } from "@web/components/ui/aspect-ratio";
import type { Project, Still } from "../../../shared/lib/generate-mock-data";

interface UserProjectProps {
  thumbnail: Still;
  username: string;
  path: string;
}

function UserProject({ thumbnail, username, path }: UserProjectProps) {
  return (
    <Link
      className="w-[352px] 2xl:w-[314px]  rounded-md lg:rounded-lg overflow-hidden relative"
      href={`/${username}/${path}`}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          alt="Project image"
          // blurDataURL={thumbnail.blurUrl}
          className="object-cover w-full h-full rounded-md"
          fill
          // placeholder="blur"
          src={thumbnail.url}
        />
        <h3 className="md:hidden absolute bottom-[16px] left-[16px] text-white text-lg tracking-[-0.54px] font-normal leading-normal">
          Man in a grass field
        </h3>
        <Button
          className="h-[34px] w-[34px] rounded-lg md:hidden absolute bottom-[16px] right-[16px] bg-white bg-opacity-20 backdrop-blur-[2px] "
          size="icon"
        >
          <ShareMobileIcon />
        </Button>
      </AspectRatio>
    </Link>
  );
}

interface Props {
  projects: Project[];
  username: string;
}

function UserProjects({ projects, username }: Props) {
  return (
    <div className="flex flex-wrap gap-1 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[30px] 2xl:py-[50x]">
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-6 2xl:gap-7">
        {projects.map((project) => (
          <UserProject
            key={project.id}
            path={project.path}
            thumbnail={project.thumbnail}
            username={username}
          />
        ))}
      </div>
    </div>
  );
}

export default UserProjects;
