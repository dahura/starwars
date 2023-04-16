import React, { FC, useState } from "react";

interface CarouselPagination {
  ids: string[];
}
export const CarouselPagination: FC<CarouselPagination> = ({ ids }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex justify-center w-full py-2 gap-2 ">
      <a href={ids[index]} className="btn btn-xs">
        prev
      </a>
      <a href={ids[index + 2]} className="btn btn-xs">
        next
      </a>
    </div>
  );
};
