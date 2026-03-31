import type { PictureInfo } from "./picture.model";
import kitties from "./mock-kitties.json";

export const getKitties = async (): Promise<PictureInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(kitties);
    }, 100);
  });
};
