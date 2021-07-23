import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Register } from "./Register";
import { Signin } from "./Signin";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Dashboard/Navbar";
import { ViewSingleIssue } from "./ViewSingleIssue";
import { NewIssue } from "./NewIssue";
import { EditIssue } from "./EditIssue";
import { Router } from "@reach/router";
import { NotFound } from "./NotFound";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";



function App() {
  return ( 
    <AuthProvider>
      <AuthContext.Consumer>
        {(context) => {
          return (
            <div className="App">
              {context.userLoggedIn && (
                <div>
                  <Navbar signOut={context.signOut} />
                  <Router>
                    <Dashboard path="/" />
                    <NewIssue currentUser={context.user} path="/new" />
                    <EditIssue path="/edit" />
                    <ViewSingleIssue path="/issue/:issueID" />
                    <NotFound default />
                  </Router>
                </div>
              )}
              {!context.userLoggedIn && (
                <div>
                  <Router>
                    <Signin signIn={context.signIn} path="/" />
                    <Register path="/register" />
                    <NotFound default />
                  </Router>
                </div>
              )}
            </div>
          );
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
