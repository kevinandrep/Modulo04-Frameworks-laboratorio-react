import { useEffect, useState } from "react";
import type { CharacterEntity } from "../../contexto/characters/characters.model";
import { useCharacters } from "../../contexto/characters";
import { ListCharacters } from "./list.character.component";

export const ListCharactersContainer = () => {
  const { characters } = useCharacters();

  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  });

  const filteredCharacters = characters.filter((character: CharacterEntity) =>
    character.name.toLowerCase().includes(debounceSearch.toLowerCase()),
  );

  return (
    <>
      <ListCharacters
        characters={filteredCharacters}
        setSearch={setSearch}
      ></ListCharacters>
    </>
  );
};
