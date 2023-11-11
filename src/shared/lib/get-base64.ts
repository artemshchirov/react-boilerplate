"use server";

import { getPlaiceholder } from "plaiceholder";
import type { Project } from "./generate-mock-data";
// import imagemin from "imagemin";
// import imageminJpegtran from "imagemin-jpegtran";

// export async function getBase64ImageUrl(url: string) {
//   // fetch image and convert it to base64
//   const response = await fetch(url);
//   const buffer = await response.arrayBuffer();
//   const minified = await imagemin.buffer(Buffer.from(buffer), {
//     plugins: [imageminJpegtran()],
//   });
//   const base64 = Buffer.from(minified).toString("base64");
//   return `data:image/jpeg;base64,${base64}`;
// }

async function getBase64(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64, color } = await getPlaiceholder(Buffer.from(buffer));
    return { base64, dominantColor: color.hex };
  } catch (err) {
    console.error(err);
    if (err instanceof Error) console.error(err.stack);
    return {
      base64: "",
      dominantColor: "transparent",
    };
  }
}

export async function addBlurredThumbnailsUrls(
  projects: Project[],
): Promise<Project[]> {
  // Make all requests at once instead of awaiting each one - avoiding a waterfall
  const base64Promises = projects.map((project) =>
    getBase64(project.thumbnail.url),
  );

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  return projects.map((project, i) => {
    return {
      ...project,
      thumbnail: {
        ...project.thumbnail,
        blurUrl: base64Results[i].base64,
        dominantColor: base64Results[i].dominantColor,
      },
    };
  });
}
