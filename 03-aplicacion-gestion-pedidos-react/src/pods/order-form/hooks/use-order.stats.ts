import { useProducts } from "../../../core/context/products-context/use-products.provider";

export const useOrderStatus = () => {
  const { products } = useProducts();

  const total = products.reduce((acc, p) => p.importe + acc, 0);

  const orderStatus =
    products.length === 0
      ? 0
      : (products.filter((p) => p.validado === true).length / products.length) *
        100;

  return { total, orderStatus };
};
