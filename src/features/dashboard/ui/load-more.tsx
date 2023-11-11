"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchImages } from "@web/app/actions/fetch-images";
import type { Still } from "../../../shared/lib/generate-mock-data";
import MySpinner from "./myspinner";

function LoadMore() {
  const [stills, setStills] = useState<Still[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const loadMoreStills = async () => {
    try {
      // Once the page 8 is reached repeat the process all over again.
      await delay(2000);
      const nextPage = (page % 7) + 1;
      // Убедитесь, что fetchImages возвращает тип Promise<Still[]> или используйте утверждение типа
      const newStills: Still[] = (await fetchImages(nextPage)) ?? [];
      setStills((prevStills: Still[]) => [...prevStills, ...newStills]);
      setPage(nextPage);
    } catch (error) {
      console.error("Ошибка при загрузке новых изображений:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      void loadMoreStills();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      {/* <Stills stills={stills} /> */}
      <div
        className="flex items-center justify-center col-span-1 p-4 sm:col-span-2 md:col-span-3 lg:col-span-4"
        ref={ref}
      >
        <MySpinner />
      </div>
    </>
  );
}

export default LoadMore;
