import { Navigate, Route, Routes } from "react-router-dom";
import RouteCollection from "./components/routes/routeCollection";
import { sitemap } from "./pages/sitemap";

export default function App() {
  return (
    <Routes>
      {RouteCollection(sitemap.public)}
      {RouteCollection(sitemap.private, true)}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
