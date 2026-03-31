import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { LoginScene } from "../scenes/login.scene";
import { ListGitScene } from "../scenes/list-git.scene";
import { DetailGitScene } from "../scenes/details-git.scene";
import { MenuScene } from "../scenes/menu.scene";
import { ListCharacterScene } from "../scenes/list-character.scene";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={appRoutes.root} element={<LoginScene />}></Route>
          <Route path={appRoutes.list} element={<ListGitScene />}></Route>
          <Route path={appRoutes.detail} element={<DetailGitScene />}></Route>
          <Route
            path={appRoutes.listRickMorty}
            element={<ListCharacterScene />}
          ></Route>
          <Route path={appRoutes.menu} element={<MenuScene />}></Route>
        </Routes>
      </Router>
    </>
  );
};
