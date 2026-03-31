import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { Layout } from "../layouts/layout";
import { PictureStoreScene } from "../scenes/picture-store.scene";
import { getKitties } from "../core/api/get-cats";
import { getPuppies } from "../core/api/get-puppies";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={appRoutes.root} element={<Layout />}>
            <Route
              index
              element={<PictureStoreScene getPictures={getKitties} />}
            ></Route>
            <Route
              path={appRoutes.puppies}
              element={<PictureStoreScene getPictures={getPuppies} />}
            ></Route>
            <Route
              path={appRoutes.kitties}
              element={<PictureStoreScene getPictures={getKitties} />}
            ></Route>
          </Route>
          <Route path="*" element={<div>Not Found</div>}></Route>
        </Routes>
      </Router>
    </>
  );
};
