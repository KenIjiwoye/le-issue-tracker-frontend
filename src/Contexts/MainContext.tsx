import { navigate } from "@reach/router";
import React, { useState, useEffect } from "react";
// import { signInUser } from "../api";

const baseUrl = process.env.REACT_APP_BASEURL;
const getAllIssues = `${baseUrl}/issues`
const createIssue = `${baseUrl}/new`;
// const viewIssue = `${baseUrl}/issue/`;

export type MainCtxState = {
    allIssues: any[];
    addNewIssue: Function

  };
  
  const MainDefaultValues: MainCtxState = {
    allIssues: [],
    addNewIssue: () => {}

  };
  
  export const MainContext = React.createContext<MainCtxState>(MainDefaultValues);

export const MainProvider = ({ children }:any) => {
const [allIssues, setallIssues] = useState([])

  useEffect(() => {
    getIssues()
    // pullIssues()
    // return () => {};
  }, []);

  // create api operations here so that we have access to the React Context Api
  const getIssues = async () =>{
      try {
        await fetch(getAllIssues)
        .then(res => res.json())
        .then(issues => setallIssues(issues))
      } catch (err) {
          console.log(`Error getting issues ;;==> ${err}`)
      }
  }

  const addNewIssue = async (issue:any) => {
    try {
      const token = localStorage.getItem('authToken')
      await fetch(getAllIssues, {
        method: "POST",
        body: JSON.stringify(issue),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json())
      .then(() => navigate('/'))
    } catch (err) {
      console.log('err making new issue', err)
    }
  }
  
  // const pullIssues = () => {
  //   const { isLoading, error, data } = useQuery('pullAllIssues', () =>
  //   fetch(getAllIssues).then(res =>
  //     res.json()
  //   )
  //   .then(issues => setallIssues(issues))
  // )
  // }
  
  return (
    <MainContext.Provider
      value={{
          allIssues,
          addNewIssue
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
