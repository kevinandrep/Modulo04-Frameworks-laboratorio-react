import { createContext } from "react";
import type { ProductsVm } from "../../api/product.model";

export type Action =
  | { type: "SET_PRODUCTS"; payload: ProductsVm[] }
  | { type: "TOGGLE_VALIDADO"; payload: number }
  | { type: "UPDATE_IMPORTE"; payload: { id: number; value: number } };

interface ProductsContextModel {
  products: ProductsVm[];
  dispatch: React.Dispatch<Action>;
}

export const ProductsContext = createContext<ProductsContextModel | undefined>(
  undefined,
);
