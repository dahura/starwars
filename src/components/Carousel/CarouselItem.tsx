import { FC } from "react";
import { getAvatar } from "../../utils/getAvatar";
import { PowerRank } from "../PowerRank/PowerRank";

interface CarouselItem {
  id: string;
  name: string;
  gender: string;
  hair_color: string;
  skin_color: string;
}
export const CarouselItem: FC<CarouselItem> = ({
  id,
  name,
  gender,
  hair_color,
  skin_color,
}) => {
  return (
    <div
      className="carousel-item after:w-full after:h-full after:z-1 after:absolute after:top-0 relative  rounded-[28px] w-1/2  flex justify-center py-4  bg-black/[0.9] shadow shadow-black z-0"
      id={id}
    >
      <div className="card relative px-4">
        <img
          src={getAvatar(name)}
          className="md:w-44 md:h-44 sm:w-40 sm:h-40 xs:w-32 xs:h-32  object-cover filter  shadow-sm rounded-b-[32px]"
          alt="Character avatar"
        />
        <PowerRank className="absolute absolute-b-right" characterName={name} />
        <div className="text-[12px] mt-2 flex text-amber-500">{name}</div>
        <div className="mt-2 space-y-1">
          <div className="text-white text-xs">gender: {gender}</div>
          <div className="text-white text-xs">heir color: {hair_color}</div>
          <div className="text-white text-xs">skin color : {skin_color}</div>
        </div>
      </div>
    </div>
  );
};
export type { CarouselItem as CarouselItemProps };
