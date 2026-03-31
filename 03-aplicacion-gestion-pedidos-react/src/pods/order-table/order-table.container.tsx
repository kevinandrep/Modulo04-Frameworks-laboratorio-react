import { useProducts } from "../../core/context/products-context/use-products.provider";
import { OrderTable } from "./order-table.components";

export const OrderTableContainer = () => {
  const { products, dispatch } = useProducts();

  const handleRowClick = (id: number) => {
    dispatch({ type: "TOGGLE_VALIDADO", payload: id });
  };

  const handleImporteChange = (id: number, value: number) => {
    dispatch({ type: "UPDATE_IMPORTE", payload: { id, value } });
  };

  return (
    <>
      <OrderTable
        products={products}
        handleImporteChange={handleImporteChange}
        handleRowClick={handleRowClick}
      ></OrderTable>
    </>
  );
};
