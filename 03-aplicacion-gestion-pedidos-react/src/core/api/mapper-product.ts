import type { ProductsModelApi, ProductsVm } from "./product.model";

export const mapProductFromApiToVm = (
  product: ProductsModelApi,
): ProductsVm => ({
  ...product,
  validado: false,
});
