import { useEffect, useState, type PropsWithChildren } from "react";
import { CharacterContext } from "./character.context";
import type { CharacterEntity } from "./characters.model";

export const CharacterProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterEntity[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((json) => setCharacters(json.results));
  }, []);

  return <CharacterContext value={{ characters }}>{children}</CharacterContext>;
};
