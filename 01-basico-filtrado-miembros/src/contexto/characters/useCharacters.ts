import { useContext } from "react";
import { CharacterContext } from "./character.context";

export const useCharacters = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error("CharacterContext no envuelve a nada");
  }

  return context;
};
