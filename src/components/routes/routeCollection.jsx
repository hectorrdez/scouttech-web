import { Route } from "react-router-dom";
import RouteProtection from "./routeProtection";

export default function RouteCollection(collection, privateRoutes = false) {
  const newCollection = Array.isArray(collection) ? collection : [collection];
  const routes = newCollection.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));

  return privateRoutes ? (
    <Route element={<RouteProtection />}>{routes}</Route>
  ) : (
    routes
  );
}
