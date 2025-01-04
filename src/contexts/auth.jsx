import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [isLogged, setLogged] = useState(
    localStorage.getItem("token") != undefined
  );

  useEffect(() => {
    if (localStorage.getItem("token") == undefined) setLogged(false);
  }, [localStorage.getItem("token")]);

  const data = { isLogged, setLogged };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
