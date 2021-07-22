import React from 'react'

const baseUrl = process.env.REACT_APP_BASEURL
const registerUrl = `${baseUrl}/auth/local/register`
const signinUrl = `${baseUrl}/auth/local`
const issuesUrl = `${baseUrl}/issues`

// auth resources
// export const signInUser = async ( email:string, password:string ) => {
//     try {
//         const user ={
//             identifier: email,
//             password: password
//         }
//         await fetch(signinUrl, {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }
//         )
//         .then(res => res.json())
//         .then((data) => console.log('logging the data',data))
//     } catch (err) {
//         console.log(err)
//     }
// }
export const registerUser = () => {}

// Issue resources
export const createIssue = () => {}
export const getAllIssues = () => {}
export const getSingleIssue = () => {}
export const updateIssue = () => {}
export const deleteIssue = () => {}