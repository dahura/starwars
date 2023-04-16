import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characterr",
  initialState: "Luke Skywalker",
  reducers: {
    setCurrent: (_, action: PayloadAction<string>) => action.payload,
  },
});
