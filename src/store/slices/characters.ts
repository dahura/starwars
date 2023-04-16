import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characters",
  initialState: [] as string[],
  reducers: {
    set: (state, action: PayloadAction<string[]>) => action.payload,
  },
});
