import { Project } from "@web/shared/lib/generate-mock-data";
import { Button } from "@web/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@web/components/ui/dialog";
import TopProjectSwiper from "./swiper/top-project-swiper";
import ImageContainer from "@web/shared/components/image-container";

interface Props {
  project: Project;
}

export const TopProject = ({ project }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ImageContainer
          projectThumbnail={project.thumbnail}
          projectTitle={project.title}
        />
      </DialogTrigger>
      <DialogContent className="flex flex-col p-4 bg-orange-100 max-h-[90vh] max-w-[90vw]">
        <TopProjectSwiper
          slides={project.stills}
          thumbnail={project.thumbnail}
        />

        <DialogFooter className="bg-yellow-300 min-h-max">
          <Button variant="outline">View full project</Button>
          <Button variant="outline">Download</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

async function TopProjects() {
  return (
    <ul className="flex flex-wrap gap-1 px-1">
      test
      {/* {topProjectsWithBlurredThumbnails.map((project, i) => (
        <TopProject key={project.id} project={project} />
      ))} */}
      {/* FIXME: <LoadMore /> */}
    </ul>
  );
}

export default TopProjects;
