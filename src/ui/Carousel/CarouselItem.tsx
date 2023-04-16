import { FC } from "react";
import { getAvatar } from "../../utils/getAvatar";

interface CarouselItem {
  id: string;
  name: string;
  gender: string;
}
export const CarouselItem: FC<CarouselItem> = ({ id, name, gender }) => {
  return (
    <div
      className="carousel-item after:w-full after:h-full after:z-1 after:absolute after:top-0 relative  rounded-[28px] w-1/2  flex justify-center py-4  bg-black/[0.9] shadow shadow-black z-0"
      id={id}
    >
      <div className="card relative">
        <img
          src={getAvatar(name)}
          className="w-[128px] h-[128px]  object-cover filter   shadow-sm rounded-b-[32px]"
          alt="Character avatar"
        />

        <div className="text-white ">{name}</div>
        <div className="text-white ">{gender}</div>
        <div className="card-bottom"></div>
      </div>
    </div>
  );
};
export type { CarouselItem as CarouselItemProps };
