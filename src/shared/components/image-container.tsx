import Image from "next/image";
import { cn } from "@web/shared/lib/utils";
import type { Still } from "../lib/generate-mock-data";

interface ImageContainerProps {
  projectThumbnail: Still;
  projectTitle?: string;
  className?: string;
}

function ImageContainer({
  projectThumbnail,
  projectTitle,
  className,
}: ImageContainerProps) {
  const galleryRowHeight = 230;
  const ratio = projectThumbnail.width / projectThumbnail.height;
  const imageWidth = Math.ceil(ratio * galleryRowHeight);

  // NOTE: add dominant color placeholder before blur loading
  const backgroundPlaceholder = projectThumbnail.dominantColor
    ? projectThumbnail.dominantColor
    : "transparent";

  // TODO: object-fit:contain for all images in gallery
  return (
    <li
      className={cn(
        "relative h-[200px] md:h-[230px] cursor-pointer overflow-hidden group flex-auto max-w-full",
        className,
      )}
      style={{ width: imageWidth }}
    >
      <Image
        alt={projectTitle ? projectTitle : projectThumbnail.name}
        blurDataURL={projectThumbnail.blurUrl}
        fill
        placeholder="blur"
        sizes="230px"
        src={projectThumbnail.url}
        className="object-cover transition group-hover:opacity-90"
        // NOTE: Turn on/off dominantColor placeholder
        // style={{ backgroundColor: backgroundPlaceholder }}
      />
    </li>
  );
}

export default ImageContainer;
