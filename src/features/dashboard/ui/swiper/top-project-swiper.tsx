"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation, Pagination } from "swiper/modules";
import type { Still } from "@web/shared/lib/generate-mock-data";

interface Props {
  slides: Still[];
  thumbnail: Still;
}

function TopProjectSwiper({ slides, thumbnail }: Props) {
  const initialSlideIndex = slides.findIndex(
    (image) => image.id === thumbnail.id,
  );

  return (
    <Swiper
      autoHeight
      className="mySwiper"
      initialSlide={initialSlideIndex >= 0 ? initialSlideIndex : 0}
      loop={slides.length > 1 && true}
      modules={[Navigation, Pagination]}
      navigation
      onNavigationNext={() => {
        console.log("slide next");
      }}
      onNavigationPrev={() => {
        console.log("slide prev");
      }}
      onSlideChange={() => {
        console.log("slide change");
      }}
    >
      {slides.map((image) => (
        <SwiperSlide className="" key={image.id}>
          <div className="relative object-contain">
            <Image
              alt={image.name}
              blurDataURL={thumbnail.blurUrl}
              className="flex items-center justify-center object-contain"
              height={image.height}
              placeholder="blur"
              src={image.url}
              width={image.width}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TopProjectSwiper;
