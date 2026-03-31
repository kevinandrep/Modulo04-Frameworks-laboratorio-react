import { useState, type PropsWithChildren } from "react";
import { CartContext } from "./cart.context";
import type { PictureInfo } from "./api/picture.model";

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<PictureInfo[]>([]);

  return <CartContext value={{ cart, setCart }}>{children}</CartContext>;
};
