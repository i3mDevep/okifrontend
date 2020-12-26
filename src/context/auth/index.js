import React, { createContext, useState } from "react";
import moment from 'moment'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ status: false });

  const value = {
    isAuth,
    activateAuth: (token, refresh) => {
      if ((token, refresh)) {
        const time = moment().add(23, 'h').toDate();
        window.localStorage.setItem("time-token", time);
        window.localStorage.setItem("oki-token", token);
        window.localStorage.setItem("oki-refresh", refresh);
        setIsAuth({ status: true });
      } else {
        setIsAuth({ status: false });
      }
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;
