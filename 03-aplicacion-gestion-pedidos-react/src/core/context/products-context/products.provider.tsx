import { useEffect, useReducer, type PropsWithChildren } from "react";
import type React from "react";
import { ProductsContext } from "./products.context";
import { getProducts } from "../../api/get-products";
import { mapProductFromApiToVm } from "../../api/mapper-product";
import { ProductsReducer } from "./products.reducer";

export const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, dispatch] = useReducer(ProductsReducer, []);

  //Cargando datos
  useEffect(() => {
    const loadData = async () => {
      const apiProducts = await getProducts();
      const vmProducts = apiProducts.map(mapProductFromApiToVm);
      dispatch({ type: "SET_PRODUCTS", payload: vmProducts });
    };

    loadData();
  }, []);

  return (
    <ProductsContext value={{ products, dispatch }}>{children}</ProductsContext>
  );
};
