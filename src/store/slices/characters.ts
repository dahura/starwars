import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IntRange } from "../../types";

export type CharacterSkill =
  | "lightsaber_skill"
  | "force_sensitivity"
  | "piloting_skills"
  | "diplomacy_skills"
  | "physical_strength";

export type CharacterSkillKeys = keyof Character["skills"];
export interface Character {
  name: string;
  skills: {
    lightsaber_skill: IntRange<1, 11>;
    force_sensitivity: IntRange<1, 11>;
    piloting_skills: IntRange<1, 11>;
    diplomacy_skills: IntRange<1, 11>;
    physical_strength: IntRange<1, 11>;
  };
  powerRank: IntRange<1, 11>;
}
export const charactersSlice = createSlice({
  name: "characters",
  initialState: [] as Character[],
  reducers: {
    changeCharacterSkills: (state, action: PayloadAction<Character>) =>
      state.map((character) =>
        character.name === action.payload.name ? action.payload : character
      ),
    addChanracterSkills: (state, action: PayloadAction<Character>) => {
      console.log(action.payload, "PAYLOAD");
      return [...state, { ...action.payload }];
    },

    setInitialData: (state, action: PayloadAction<Character[]>) =>
      action.payload,
  },
});
