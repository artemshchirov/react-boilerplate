import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey:
    process.env.NEXT_IMAGEKIT_PUBLIC_KEY ??
    "public_TIrJm0pOEi3u3aCaxNpLMecFwxw=",
  privateKey:
    process.env.NEXT_IMAGEKIT_PRIVATE_KEY ??
    "private_XXWEY2EuTfjh+TQqVz36GWq6BTw=",
  urlEndpoint:
    process.env.NEXT_IMAGEKIT_PUBLIC_ENDPOINT ??
    "https://ik.imagekit.io/webbuilder/",
});

interface ImageKitUploadError {
  message: string;
  help?: string;
}

interface ImageKitUploadResponse {
  fileId: string;
  name: string;
  url: string;
}

export async function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

// FIXME: any
export async function uploadImage(formData: FormData): Promise<any> {
  try {
    const file = formData.get("file");
    if (!(file instanceof File)) {
      throw new Error("The provided 'file' is not an instance of File.");
    }

    const fileBase64 = await convertFileToBase64(file);
    const fileName = file.name;

    const result = await saveToImagekit({ file: fileBase64, fileName });
    console.log("RESULT for file:", fileName, result);
    return result;
  } catch (error) {
    console.error("Upload failed:", error);
  }
}

export async function saveToImagekit({
  file,
  fileName,
}: {
  file: string; // Base64
  fileName: string;
}): Promise<ImageKitUploadResponse> {
  const uploadPromise = new Promise<ImageKitUploadResponse>(
    (resolve, reject) => {
      imagekit.upload(
        {
          file,
          fileName,
          folder: "dropzone",
          tags: ["tag1"],
          isPrivateFile: false,
          useUniqueFileName: true,
        },
        (
          err: ImageKitUploadError | null,
          result: ImageKitUploadResponse | null,
        ) => {
          if (err) reject(err);
          else if (result) resolve(result);
          else reject(new Error("Unknown error"));
        },
      );
    },
  );

  return uploadPromise;

  // TODO: verify and save this data to database.
}
