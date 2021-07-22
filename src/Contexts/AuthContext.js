import React, { useState, useEffect } from "react";
import { signInUser } from "../api";

const baseUrl = process.env.REACT_APP_BASEURL;
const registerUrl = `${baseUrl}/auth/local/register`;
const signinUrl = `${baseUrl}/auth/local`;

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
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
  //   const signIn = async (email, password) => {
  //     const user = await signInUser(email, password);
  //     console.log("SIGN IN USER =>", user);
  //   };
  return (
    <AuthContext.Provider
      value={{
        authToken,
        userLoggedIn,
        signIn: async (email, password) => {
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
        },
        signOut: () => {
          setUserLoggedIn(false);
          setauthToken(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
