import React, {
  Children,
  FC,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { useCharacter } from "../../store/hooks/useCharacter";
import { getAvatar } from "../../utils/getAvatar";
import { getBackround } from "../../utils/getBackground";

interface ArtBoard {
  children: ReactNode;
}
export const ArtBoard: FC<ArtBoard> = ({ children }) => {
  const { character } = useCharacter();

  return (
    <div className="artboard  h-screen  max-w-md relative">
      <div className="relative">
        <img
          className="absolute z-0  h-screen object-cover object-right"
          src={getBackround("imperial")}
          alt=""
        />
        <img
          className="max-h-[390px] absolute z-1"
          src={getAvatar(character)}
          alt=""
        />
        {children}
        <button className="btn  btn-primary absolute top-[320px] w-1/2 m-auto left-0  right-0 rounded-t-[28px]  bg-black/70">
          Show Profile
        </button>
      </div>
    </div>
  );
};
