import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { NAVBAR_ITEMS } from "@constants/navigation";
import { Loader } from "@components";
import { ROUTES } from "@constants/routes";
import AppContainer from "@layouts/AppContainer";
import NotFound from "@components/NotFound";

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppContainer />}>
          {Object.values(NAVBAR_ITEMS).map((item) => {
            const { path, element } = item;

            return <Route element={element} key={path} path={path} />;
          })}
        </Route>
        <Route element={<NotFound />} path={ROUTES.notFound} />
      </Routes>
    </Suspense>
  );
};

export default Router;
