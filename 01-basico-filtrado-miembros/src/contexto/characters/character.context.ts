import { createContext } from "react";
import type { CharacterContextModel } from "./list-character.vm";

export const CharacterContext = createContext<
  CharacterContextModel | undefined
>(undefined);
