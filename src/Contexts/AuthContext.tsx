import React, { useState, useEffect } from "react";
// import { signInUser } from "../api";

const baseUrl = process.env.REACT_APP_BASEURL;
const registerUrl = `${baseUrl}/auth/local/register`;
const signinUrl = `${baseUrl}/auth/local`;

export type AuthCtxState = {
  authToken: any;
  userLoggedIn: boolean;
  signIn: Function;
  signOut: Function;
};

const AuthDefaultValues: AuthCtxState = {
  authToken: null,
  userLoggedIn: false,
  signIn: () => {},
  signOut: () => {}
};

export const AuthContext = React.createContext<AuthCtxState>(AuthDefaultValues);

export const AuthProvider = ({ children }:any) => {
  const [authToken, setauthToken] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      return setUserLoggedIn(true);
    } else {
      return setUserLoggedIn(false);
    }
    return () => {};
  }, []);

  // create api operations here so that we have access to the React Context Api
  const signIn = async (email:string, password:string) => {
    try {
      const user = {
        identifier: email,
        password: password,
      };
      await fetch(signinUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("logging the data", data);
          localStorage.setItem("authToken", JSON.stringify(data.jwt));
          setUserLoggedIn(true);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const signOut = () => {
    setUserLoggedIn(false);
    setauthToken(null);
  };
  return (
    <AuthContext.Provider
      value={{
        authToken,
        userLoggedIn,
        signIn: signIn,
        signOut: signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
