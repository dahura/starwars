import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { characterSlice } from "../slices/character";

export const useCharacter = () => {
  const characters = useAppSelector(
    ({ starwarsApi }) => starwarsApi.queries.getAll
  );

  const character = useAppSelector(({ character }) => character);

  const dispatch = useAppDispatch();
  const { setCurrent } = characterSlice.actions;
  const setCurrentCharacter = useCallback(
    (name: string) => dispatch(setCurrent(name)),
    []
  );
  return useMemo(
    () => ({
      character,
      setCurrentCharacter,
    }),
    [character]
  );
};
