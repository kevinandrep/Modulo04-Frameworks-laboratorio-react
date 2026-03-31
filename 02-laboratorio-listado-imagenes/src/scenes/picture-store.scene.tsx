import type { PictureInfo } from "../core/api/picture.model";
import { PictureStoreContainer } from "../pods/pciture-store/picture-store.container";

interface Props {
  getPictures: () => Promise<PictureInfo[]>;
}

export const PictureStoreScene = ({ getPictures }: Props) => {
  return (
    <PictureStoreContainer getPictures={getPictures}></PictureStoreContainer>
  );
};
