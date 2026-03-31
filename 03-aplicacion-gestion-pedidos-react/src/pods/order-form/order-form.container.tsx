import { useState } from "react";
import { OrderForm } from "./order-form.component";
import { useOrderStatus } from "./hooks/use-order.stats";
import { useProducts } from "../../core/context/products-context/use-products.provider";

export const OrderFormContainer = () => {
  const { products } = useProducts();
  const { orderStatus, total } = useOrderStatus();

  const canSubmit = products.every((p) => p.validado === true);
  const [formData, setFormData] = useState({
    num: "",
    provedor: "",
    fecha: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(canSubmit);
  };

  return (
    <>
      <OrderForm
        handleSubmit={handleSubmit}
        sent={sent}
        formData={formData}
        setFormData={setFormData}
        total={total}
        orderStatus={orderStatus}
        canSubmit={canSubmit}
      ></OrderForm>
    </>
  );
};
