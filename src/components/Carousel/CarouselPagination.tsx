import React, { FC, useCallback, useState } from "react";

interface CarouselPagination {
  ids: string[];
}
export const CarouselPagination: FC<CarouselPagination> = ({ ids }) => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = useCallback(
    () => setIndex((index) => (index === 0 ? index : index - 1)),
    []
  );
  const handleClickNext = useCallback(
    () => setIndex((index) => (index === ids.length - 2 ? index : index + 1)),
    []
  );

  return (
    <div className="flex justify-center w-full py-2 gap-2  absolute top-[320px] right-[25%]  lg:flex  xs:hidden    m-auto  ">
      <a
        href={`#${ids[index]}`}
        onClick={handleClickPrev}
        className="btn btn-xs"
      >
        prev
      </a>
      <a
        href={`#${ids[index + 1]}`}
        onClick={handleClickNext}
        className="btn btn-xs"
      >
        next
      </a>
    </div>
  );
};
