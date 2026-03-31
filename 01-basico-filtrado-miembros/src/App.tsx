import { OrganizationProvider } from "./contexto/organization-git/organization.provider";
import { MemberProvider } from "./contexto/members-git/members.provider";

import { CharacterProvider } from "./contexto/characters/character.provider";
import { AppRouter } from "./router";

function App() {
  return (
    <>
      <MemberProvider>
        <OrganizationProvider>
          <CharacterProvider>
            <AppRouter></AppRouter>
          </CharacterProvider>
        </OrganizationProvider>
      </MemberProvider>
    </>
  );
}

export default App;
