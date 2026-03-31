import { createContext } from "react";
import type { PictureInfo } from "./api/picture.model";

interface CartContextModel {
  cart: PictureInfo[];
  setCart: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
}

export const CartContext = createContext<CartContextModel | undefined>(
  undefined,
);
