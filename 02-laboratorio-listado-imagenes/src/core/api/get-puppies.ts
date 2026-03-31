import type { PictureInfo } from "./picture.model";
import puppies from "./mock-puppies.json";

export const getPuppies = async (): Promise<PictureInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(puppies);
    }, 100);
  });
};
