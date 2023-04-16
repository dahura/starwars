const avatars: Record<string, string> = {
  "Luke Skywalker": "luke.png",

  r2d2: "r2d2.png",
  hanSolo: "hanSolo.png",
};

export const getAvatar = (characterName: string) =>
  `/characters/${characterName}.png`;
