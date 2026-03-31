import type { ProductsVm } from "../../api/product.model";
import type { Action } from "./products.context";

export const ProductsReducer = (
  state: ProductsVm[],
  action: Action,
): ProductsVm[] => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    case "TOGGLE_VALIDADO":
      return state.map((p) =>
        p.id === action.payload ? { ...p, validado: !p.validado } : p,
      );

    case "UPDATE_IMPORTE":
      return state.map((p) =>
        p.id === action.payload.id
          ? { ...p, importe: action.payload.value }
          : p,
      );

    default:
      return state;
  }
};
