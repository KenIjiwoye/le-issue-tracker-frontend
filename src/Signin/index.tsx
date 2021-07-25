import React from "react";
import logo from "../logo.svg";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";
import { navigate, RouteComponentProps } from '@reach/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'

type Inputs = { 
  identifier: string,
  password: string
}
interface SigninProps extends RouteComponentProps{
  // signIn: Function
  setAuthToken: any
  setUserLoggedIn: any
}

export const Signin = ({setAuthToken, setUserLoggedIn}:SigninProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data:any) => newSignIn.mutate(data)

  const newSignIn = useMutation( signInUser => (
    fetch(`${process.env.REACT_APP_BASEURL}/auth/local`, {
      method: 'POST',
      body: JSON.stringify(signInUser),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then( data => {
      localStorage.setItem('authToken',data.jwt)
      localStorage.setItem('currentUser',data.user.username)
      setAuthToken(data.jwt)
      setUserLoggedIn(true)
    })
    .then(() => navigate('/'))
  ))
  return (
    <div style={{
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }} >
      <img src={logo} alt="Link Empower logo" width="150" />
      <h1>Issue Tracker</h1>
      <h2>Sign In</h2>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
        //   alignItems: 'center',
          minWidth: 400
      }} >
        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column'}}  >
        <input
          className="le-input"
          type="email"
          placeholder="Email"
          {...register("identifier", { required: true })}
        />
        <input
          className="le-input"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.identifier && <span>Email field is required</span>}
        {errors.password && <span>Password field is required</span>}
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minWidth: 400
      }} >
        {/* <SecondaryBtnOutline text="REGISTER" /> */}
        {/* <PrimaryBtn text="SIGN IN" /> */}
        <input type='submit' value='REGISTER' className='secondary-outline-btn' />
        <input type='submit' value='SIGN IN' className='primary-btn' />
      </div>
        </form>
      </div>
    </div>
  );
};
