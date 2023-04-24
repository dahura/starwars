import { useAppSelector } from ".";

export const usePowerRank = (characterName: string) => {
  const powerRank = useAppSelector(({ characters }) =>
    characters.find(({ name }) => name === characterName)
  )?.powerRank;
  return powerRank || -1;
};
