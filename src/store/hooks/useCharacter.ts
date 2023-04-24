import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { characterSlice } from "../slices/character";
import { useParams } from "react-router-dom";

export const useCharacter = (characterId?: string) => {
  const character = useAppSelector(({ character }) => character);

  const dispatch = useAppDispatch();
  const { setCurrent } = characterSlice.actions;

  const setCurrentCharacter = useCallback(
    (name: string) => dispatch(setCurrent(name)),
    []
  );

  const { id } = useParams();

  return useMemo(
    () => ({
      character: id || character,
      setCurrentCharacter,
    }),
    [character]
  );
};
