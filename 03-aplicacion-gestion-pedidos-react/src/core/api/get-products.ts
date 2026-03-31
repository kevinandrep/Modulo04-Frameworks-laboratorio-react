import data from "./data.json";
import type { ProductsModelApi } from "./product.model";

export const getProducts = (): Promise<ProductsModelApi[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
};
