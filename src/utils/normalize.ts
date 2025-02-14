export const normalizeText = (text: string): string => {
  return text
    .toLocaleLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
    .join(" ");
};