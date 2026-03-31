import { ListCharactersContainer } from "../pods/list-characters/list-character.container";
import { AppLayout } from "../layouts/app.layout";

export const ListCharacterScene = () => {
  return (
    <>
      <AppLayout>
        <ListCharactersContainer></ListCharactersContainer>
      </AppLayout>
    </>
  );
};
