export const getFirst = (object: Record<string, boolean>) => {
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === true) {
      return keys[i];
    }
  }
};
