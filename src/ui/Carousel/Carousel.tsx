import React, { Children, FC, useRef } from "react";
import { useCarousel } from "./useCarousel";
import { CarouselItemProps } from "./CarouselItem";
import { CarouselPagination } from "./CarouselPagination";

interface Carousel {
  children: React.ReactNode;
  pagination?: {
    startId: string;
  };
}
export const Carousel: FC<Carousel> = ({ children }) => {
  const carousel = useRef<HTMLDivElement>(null);
  const { handleCarouselClick, handleCarouselScroll } = useCarousel(carousel);

  return (
    <>
      <div
        ref={carousel}
        className="w-10/12 h-72 carousel left-0 right-0 m-auto absolute top-[340px]"
        onScroll={handleCarouselScroll}
        onClick={handleCarouselClick}
      >
        {children}
      </div>
    </>
  );
};
