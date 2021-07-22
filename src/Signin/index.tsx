import React from "react";
import logo from "../logo.svg";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";
import { RouteComponentProps } from '@reach/router'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = { 
  email: string,
  password: string
}
interface SigninProps extends RouteComponentProps{
  signIn: Function
}

export const Signin = ({signIn}:SigninProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => signIn(data.email,data.password)
  console.log(watch("email")) 
  console.log(watch("password")) 
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
          {...register("email", { required: true })}
        />
        <input
          className="le-input"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.email && <span>Email field is required</span>}
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
