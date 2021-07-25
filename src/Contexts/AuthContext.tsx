import { navigate } from "@reach/router";
import React, { useState, useEffect } from "react";
// import { signInUser } from "../api";
import { useQuery } from 'react-query'

const baseUrl = process.env.REACT_APP_BASEURL;
const registerUrl = `${baseUrl}/auth/local/register`;
const signinUrl = `${baseUrl}/auth/local`;

export type AuthCtxState = {
  authToken: any;
  userLoggedIn: boolean;
  user:any;
  // signIn: Function;
  signOut: Function;
  setauthToken: any;
  setUserLoggedIn: any;
};

const AuthDefaultValues: AuthCtxState = {
  authToken: null,
  userLoggedIn: false,
  user: {},
  // signIn: () => {},
  signOut: () => {},
  setauthToken: null,
  setUserLoggedIn: null
};

export const AuthContext = React.createContext<AuthCtxState>(AuthDefaultValues);

export const AuthProvider = ({ children }:any) => {
  const [authToken, setauthToken] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState('')


  useEffect(() => {
    if (localStorage.getItem("authToken") && localStorage.getItem('currentUser')) {
       setUserLoggedIn(true);
       setUser(JSON.stringify(localStorage.getItem('currentUser')))
    } else {
      return setUserLoggedIn(false);
    }
    // return () => {};
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
          localStorage.setItem("authToken", data.jwt);
          setUserLoggedIn(true);
          localStorage.setItem('currentUser', data.user.username)
          setUser(data.user.username)
          console.log("logging the USER", data.user);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const signOut = () => {
    setUserLoggedIn(false);
    setauthToken(null);
    localStorage.removeItem('authToken')
    localStorage.removeItem('currentUser')
    navigate('/')
  };
  return (
    <AuthContext.Provider
      value={{
        authToken,
        userLoggedIn,
        user,
        // signIn: signIn,
        signOut: signOut,
        setauthToken,
        setUserLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
