type conflictSide = "imperial" | "rebels";
export const getBackround = (conflictSide: conflictSide) =>
  `/background/${conflictSide}.png`;
