import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { Character, charactersSlice } from "../slices/characters";
import { useCharacter } from "./useCharacter";
import {
  generateRandomSkills,
  convertObjectToArray,
  calculatePowerRang,
} from "./utils";

export const useCharacterSkills = () => {
  const { character } = useCharacter();

  const { addChanracterSkills, changeCharacterSkills, setInitialData } =
    charactersSlice.actions;

  const characters = useAppSelector(({ characters }) => characters);

  const characterSkillsArray = useMemo(() => {
    return convertObjectToArray(
      characters.find(({ name }) => name === character)?.skills!
    );
  }, [characters]);

  const dispatch = useAppDispatch();

  const addSkills = useCallback(() => {
    dispatch(addChanracterSkills(generateRandomSkills(character)));
  }, []);

  const changeSkills = useCallback((characterSckills: Character["skills"]) => {
    dispatch(
      changeCharacterSkills({
        name: character,
        skills: characterSckills,
        powerRank: calculatePowerRang(characterSckills),
      })
    );
  }, []);

  return useMemo(
    () => ({
      addSkills,
      changeSkills,
      character: { character, characterSkillsArray },
    }),
    [character, characterSkillsArray]
  );
};
