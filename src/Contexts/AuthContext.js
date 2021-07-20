import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setauthToken] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  return (
    <AuthContext.Provider value={{ authToken, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
