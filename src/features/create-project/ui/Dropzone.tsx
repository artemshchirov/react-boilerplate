"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import type { FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import MySwiper from "@web/shared/components/swiper/my-swiper";
import Section from "@web/shared/components/layouts/section";
import { fakeImages } from "@web/shared/lib/generate-mock-data";
import ImageKitImage from "@web/shared/components/imagekit-image";
import { saveToImagekit, uploadImage } from "../actions";

interface Props {
  className?: string;
}

interface CustomFile extends File {
  preview?: string;
}

function Dropzone({ className }: Props) {
  const [files, setFiles] = useState<CustomFile[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);
  const [images, setImages] = useState<any>([]); // FIXME: any

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      console.log("Files dropped");
      if (acceptedFiles.length) {
        console.log("Accepted files:", acceptedFiles);
        setFiles((previousFiles) => [
          ...previousFiles, // NOTE: Uncomment if allowing multiple files
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) }),
          ),
        ]);
      }

      if (rejectedFiles.length) {
        console.log("Rejected files:", rejectedFiles);
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }
    },
    [],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1024 * 10, // 10mb in bytes
    maxFiles: 10,
    onDrop,
  });

  useEffect(() => {
    files.forEach((file) => {
      console.log(`File ${file.name} is ready for upload`);
    });

    return () => {
      files.forEach((file) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        URL.revokeObjectURL(file.preview!);
        console.log(`Cleaned up ${file.name}`);
      });
    };
  }, [files]);

  const removeFile = (name: string) => {
    console.log(`Removing file: ${name}`);
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    console.log("Removing all files");
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name: string) => {
    console.log(`Removing rejected file: ${name}`);
    setRejected((prevFiles) =>
      prevFiles.filter(({ file }) => file.name !== name),
    );
  };

  const uploadImages = async () => {
    const uploadPromises = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "publicKey",
        process.env.NEXT_IMAGEKIT_PUBLIC_KEY ??
          "public_TIrJm0pOEi3u3aCaxNpLMecFwxw=",
      );
      formData.append("token", "your_token_here");
      formData.append("expire", "your_expire_time_here");
      return uploadImage(formData);
    });

    try {
      const results = await Promise.all(uploadPromises);
      console.log("results:", results);
      // alert(JSON.stringify(results));
      setImages(results);
    } catch (error) {
      console.error(`Upload failed for files: ${JSON.stringify(files)}`, error);
    }
  };

  const action = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (files.length === 0) {
      console.log("No files to upload");
      return;
    }
    console.log("Uploading files:", files);
    await uploadImages();
  };

  return (
    <>
      <form className="bg-blue-100 p-4" onSubmit={action}>
        <div
          {...getRootProps({
            className,
          })}
        >
          <input {...getInputProps({ name: "file" })} />
          <div className="flex flex-col items-center justify-center gap-4 bg-lime-200">
            {/* <ArrowUpTrayIcon className="h-5 w-5 fill-current" /> */}⬆
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag & drop files here, or click to select files</p>
            )}
          </div>
        </div>

        {/* Preview */}
        <section className="mt-10">
          <div className="flex gap-4 bg-gray-200">
            <h2 className="title text-3xl font-semibold">Preview</h2>
            <button
              className="mt-1 rounded-md border border-rose-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
              onClick={removeAll}
              type="button"
            >
              Remove all files
            </button>
            <button
              className="ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-purple-400 hover:text-white"
              type="submit"
            >
              Upload to ImageKit
            </button>
          </div>

          {/* Accepted files */}
          <h3 className="title mt-10 border-b pb-3 text-lg font-semibold text-stone-600">
            Accepted Files
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {files.map((file) => (
              <li
                className="relative h-32 rounded-md shadow-lg"
                key={file.name}
              >
                {file.preview ? (
                  <ImageKitImage
                    alt={file.name}
                    height={100} // Установите необходимую высоту
                    preview={file.preview}
                    quality={80}
                    src={file.preview}
                    width={100} // Установите необходимую ширину
                  />
                ) : (
                  <div className="h-full w-full rounded-md object-cover bg-gray-300 flex items-center justify-center">
                    No image preview available
                  </div>
                )}

                <button
                  className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border border-rose-400 bg-rose-400 transition-colors hover:bg-white"
                  onClick={() => {
                    removeFile(file.name);
                  }}
                  type="button"
                >
                  {/* <XMarkIcon className="h-5 w-5 fill-white transition-colors hover:fill-rose-400" /> */}
                  ❌
                </button>
                <p className="mt-2 text-[12px] font-medium text-stone-500">
                  {file.name}
                </p>
              </li>
            ))}
          </ul>

          {/* Rejected Files */}
          <h3 className="title mt-24 border-b pb-3 text-lg font-semibold text-stone-600">
            Rejected Files
          </h3>
          <ul className="mt-6 flex flex-col">
            {rejected.map(({ file, errors }) => (
              <li className="flex items-start justify-between" key={file.name}>
                <div>
                  <p className="mt-2 text-sm font-medium text-stone-500">
                    {file.name}
                  </p>
                  <ul className="text-[12px] text-red-400">
                    {errors.map((error) => (
                      <li key={error.code}>{error.message}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="mt-1 rounded-md border border-rose-400 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
                  onClick={() => {
                    removeRejected(file.name);
                  }}
                  type="button"
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      </form>
      <Section className="bg-orange-200">
        {/* <div className="mx-auto max-w-6xl h-min"> */}
        {images ? <MySwiper images={images} /> : null}
        {/* </div> */}
      </Section>
    </>
  );
}

export default Dropzone;
