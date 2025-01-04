import Home from "./private/home";
import Profile from "./private/profile";
import Landing from "./public/landing";
import Login from "./public/login";
import Pricing from "./public/pricing";
import Products from "./public/products";
import Register from "./public/register";

export const sitemap = {
  public: [
    { path: "/", element: <Landing />, name: "Inicio", scope: "all" },
    {
      path: "/products",
      element: <Products />,
      name: "Productos",
      scope: "all",
    },
    {
      path: "/pricing",
      element: <Pricing />,
      name: "Planes",
      scope: "all",
    },
    {
      path: "/access/login",
      element: <Login />,
      name: "Entrar",
      scope: "footer",
    },
    {
      path: "/access/register",
      element: <Register />,
      name: "Unirse",
      scope: "footer",
    },
  ],
  private: [
    { path: "/home", element: <Home />, name: "Inicio" },
    { path: "/profile", element: <Profile />, name: "Perfil" },
  ],
};
