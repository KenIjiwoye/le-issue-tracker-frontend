import { navigate } from "@reach/router";
import React, { useState, useEffect } from "react";
// import { signInUser } from "../api";

const baseUrl = process.env.REACT_APP_BASEURL;
const getAllIssues = `${baseUrl}/issues`
const createIssue = `${baseUrl}/new`;
const getUsers = `${baseUrl}/users`
// const viewIssue = `${baseUrl}/issue/`;

export type MainCtxState = {
    allIssues: any[];
    allUsers: any[];
    addNewIssue: Function

  };
  
  const MainDefaultValues: MainCtxState = {
    allIssues: [],
    allUsers: [],
    addNewIssue: () => {}

  };
  
  export const MainContext = React.createContext<MainCtxState>(MainDefaultValues);

export const MainProvider = ({ children }:any) => {
const [allIssues, setallIssues] = useState([])
const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    getIssues()
    getAllUsers()
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
  const getAllUsers = async () =>{
      try {
        await fetch(getUsers)
        .then(res => res.json())
        .then(users => setAllUsers(users))
      } catch (err) {
          console.log(`Error getting users ;;==> ${err}`)
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
          allUsers,
          addNewIssue
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
