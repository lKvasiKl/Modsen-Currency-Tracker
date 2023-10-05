import { Route, Routes } from "react-router-dom";
import { NAVBAR_ITEMS } from "@constants/navigation";
import { Suspense } from "react";
import { Loader } from "@components";
import AppContainer from "@layouts/AppContainer";
import NotFound from "@components/NotFound";

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppContainer />}>
          {Object.keys(NAVBAR_ITEMS).map((itemName) => {
            const { path, element } = NAVBAR_ITEMS[itemName];

            return <Route element={element} key={path} path={path} />;
          })}
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Suspense>
  );
};

export default Router;
