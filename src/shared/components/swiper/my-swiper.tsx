import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

function MySwiper({ images }: { images: any }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log("images:", images);
  return (
    <div className="carousel">
      <Swiper
        className="mySwiper2"
        loop
        modules={[FreeMode, Navigation, Thumbs]}
        navigation
        spaceBetween={10}
        style={
          {
            // FIXME
            // "--swiper-navigation-color": "#fff",
            // "--swiper-pagination-color": "#fff",
          }
        }
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.fileId}>
            <Image
              alt={`Slide ${image.fileId}`}
              className="h-full w-full rounded-md object-contain"
              height={600}
              src={image.url}
              width={1250}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        className="mySwiper"
        freeMode
        loop
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView={images.length}
        spaceBetween={10}
        watchSlidesProgress
      >
        {images.map((image) => (
          <SwiperSlide key={image.fileId}>
            <Image
              alt={`Thumbnail ${image.fileId}`}
              className="h-full w-full rounded-md object-contain"
              height={100}
              src={image.url}
              width={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MySwiper;
