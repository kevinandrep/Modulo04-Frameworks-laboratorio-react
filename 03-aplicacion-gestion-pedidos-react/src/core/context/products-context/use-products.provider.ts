import { useContext } from "react";
import { ProductsContext } from "./products.context";

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("productContext no envuelve un componente");
  }

  return context;
};
