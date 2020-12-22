import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ status: false, token: "" });

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.localStorage.setItem("okitoken", token);
      setIsAuth({ status: true, token });
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;
