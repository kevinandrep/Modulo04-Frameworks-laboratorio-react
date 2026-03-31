import { useNavigate } from "react-router-dom";
import { MenuApp } from "./menu.component";

export const MenuContainer = () => {
  const navigate = useNavigate();

  const handleEnterList = (list: string) => {
    navigate(list);
  };

  return (
    <>
      <MenuApp handleEnterList={handleEnterList}></MenuApp>
    </>
  );
};
