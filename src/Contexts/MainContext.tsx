import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query'
// import { signInUser } from "../api";

const baseUrl = process.env.REACT_APP_BASEURL;
const getAllIssues = `${baseUrl}/issues`
const createIssue = `${baseUrl}/new`;
// const viewIssue = `${baseUrl}/issue/`;

export type MainCtxState = {
    allIssues: any[];

  };
  
  const MainDefaultValues: MainCtxState = {
    allIssues: [],

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
          allIssues
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
