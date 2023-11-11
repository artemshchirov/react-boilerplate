import Image from "next/image";

interface ImageKitLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageKitLoader = ({
  src,
  width,
  quality,
}: ImageKitLoaderProps): string => {
  let processedSrc = src;
  if (processedSrc.startsWith("/")) {
    processedSrc = processedSrc.slice(1);
  }

  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");

  let urlEndpoint =
    process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT ??
    "https://ik.imagekit.io/webbuilder/";

  if (urlEndpoint.endsWith("/")) {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  console.log(
    `imageKitLoader: ${urlEndpoint}/${processedSrc}?tr=${paramsString}`,
  );
  return `${urlEndpoint}/${processedSrc}?tr=${paramsString}`;
};

interface ImageKitImageProps {
  src: string;
  alt: string;
  preview: string;
  width?: number;
  height?: number;
  quality?: number;
}

function ImageKitImage({
  src,
  alt,
  preview,
  width = 100,
  height = 100,
  quality = 80,
}: ImageKitImageProps) {
  return (
    <Image
      alt={alt}
      className="h-full w-full rounded-md object-contain"
      height={height}
      loader={imageKitLoader}
      onLoad={() => {
        preview && URL.revokeObjectURL(preview);
      }}
      quality={quality}
      src={src}
      width={width}
    />
  );
}

export default ImageKitImage;
