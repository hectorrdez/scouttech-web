import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo.svg";
import { Row } from "../../layouts/row";
import { closeSession } from "../../lib/auth";
import { sitemap } from "../../pages/sitemap";
import { Button } from "./button";

export default function Header({ logged = false }) {
  return (
    <header className="flex w-full justify-center bg-black/50 fixed top-0 z-50 backdrop-blur-lg text-primary-background p-4">
      <Row className="w-full max-w-screen-xl justify-between items-center">
        <div>
          <Link to={logged ? "/home" : "/"}>
            <img src={HeaderLogo} alt="ScoutTech logo" className="w-200" />
          </Link>
        </div>
        <div>
          <HeaderMenu logged={logged} closeSession={closeSession} />
        </div>
      </Row>
    </header>
  );
}

function HeaderMenu({ logged, closeSession }) {
  const links = logged ? sitemap.private : sitemap.public;

  return (
    <ul className="flex gap-4 items-center">
      {links
        .filter((e) => e.scope == "all" || e.scope == "header")
        .map((route, index) => (
          <li key={index}>
            <Link to={route.path} target="_self">
              {route.name}
            </Link>
          </li>
        ))}
      {logged ? (
        <>
          <Button onClick={closeSession}>Cerrar sesión</Button>
        </>
      ) : (
        <>
          <Link to={"/access/login"} target="_self">
            <Button variant="secondary">Iniciar sesión</Button>
          </Link>
          <Link to={"/access/register"} target="_self">
            <Button>Crear cuenta</Button>
          </Link>
        </>
      )}
    </ul>
  );
}
