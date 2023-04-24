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
import { Link } from "react-router-dom";

interface ArtBoard {
  children: ReactNode;
  personPageCharacter?: string | undefined;
}
export const ArtBoard: FC<ArtBoard> = ({ children, personPageCharacter }) => {
  const { character } = useCharacter();

  return (
    <div className="artboard h-screen relative bg-black">
      <div className="relative">
        <img
          className="absolute z-0  h-screen object-cover object-right md:left-0 md:right-0 md:m-auto "
          src={getBackround("imperial")}
          alt=""
        />
        <img
          className="max-h-[390px] absolute z-1 md:left-0 md:right-0 md:m-auto"
          src={getAvatar(personPageCharacter ? personPageCharacter : character)}
          alt=""
        />
        {children}
        {!personPageCharacter && (
          <Link
            to={`/person/${character}`}
            className="btn  btn-primary absolute top-[320px]   w-64  m-auto left-0  right-0 rounded-t-[28px] z-20  bg-black/70"
          >
            Show Profile
          </Link>
        )}
      </div>
    </div>
  );
};
