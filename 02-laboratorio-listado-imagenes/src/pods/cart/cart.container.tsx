import { Cart } from "./cart.component";
import type { PictureInfo } from "../../core/api/picture.model";
import { useCart } from "../../core/useCart";

export const CartContainer = () => {
  const { cart, setCart } = useCart();

  const handleRemove = (id: string) => {
    setCart((prevCart: PictureInfo[]) =>
      prevCart.filter((item) => item.id !== id),
    );
  };
  return (
    <Cart cart={cart} setCart={setCart} handleRemove={handleRemove}></Cart>
  );
};
