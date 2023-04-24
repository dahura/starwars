import { IntRange } from "../../types";
import {
  Character,
  CharacterSkill,
  CharacterSkillKeys,
} from "../slices/characters";

export const generateRandomSkills = (name: string) => {
  const skills: CharacterSkill[] = [
    "lightsaber_skill",
    "force_sensitivity",
    "piloting_skills",
    "diplomacy_skills",
    "physical_strength",
  ];
  const skillValues = skills.map(() => Math.floor(Math.random() * 10) + 1);
  const result = skills.reduce<Omit<Character["skills"], "name">>(
    (obj, skill, i) => ({ ...obj, [skill]: skillValues[i] }),
    {
      lightsaber_skill: 1,
      force_sensitivity: 1,
      piloting_skills: 1,
      diplomacy_skills: 1,
      physical_strength: 1,
    }
  );
  return { name, skills: result, powerRank: calculatePowerRang(result) };
};
export const convertObjectToArray = <
  T extends Record<CharacterSkillKeys, number> | undefined
>(
  obj: T
) => {
  return Object.entries(obj ?? {}).map(([key, value]) => ({
    name: key,
    value: value,
  })) as { name: CharacterSkill; value: IntRange<1, 11> }[];
};

export const calculatePowerRang = (obj: Record<string, string | number>) => {
  const values = Object.values(obj).map((val) => Number(val));
  const sum = values.reduce((acc, curr) => acc + curr);
  const average = sum / values.length;
  const powerRang = Math.round(average);
  return powerRang as IntRange<1, 11>;
};
