import { useEffect, useState } from "react";
import type { PictureInfo } from "../../core/api/picture.model";
import { useCart } from "../../core/useCart";
import { PictureStore } from "./picture-store.component";

interface Props {
  getPictures: () => Promise<PictureInfo[]>;
}

export const PictureStoreContainer = ({ getPictures }: Props) => {
  const [pictures, setPictures] = useState<PictureInfo[]>([]);
  const { cart, setCart } = useCart();

  //fetch de datos de api / mock
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPictures();
      setPictures(data);
    };

    fetchData();
  }, [getPictures]);

  //handle change del carrito con el checkbox como un toggle para agregar o quitar comprobado si existe o no
  const handleChange = (pic: PictureInfo) => {
    setCart((prevCart) => {
      const exist = prevCart.some((item) => item.id === pic.id);

      if (exist) {
        return prevCart.filter((item) => item.id !== pic.id);
      } else {
        return [...prevCart, pic];
      }
    });
  };

  return (
    <PictureStore
      pictures={pictures}
      cart={cart}
      handleChange={handleChange}
    ></PictureStore>
  );
};
