import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { Outlet, useNavigate } from "react-router-dom";

export default function RouteProtection() {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/access/login", { replace: true });
  }, [isLogged]);

  return isLogged ? <Outlet /> : null;
}
