import React from "react";
import logo from "../logo.svg";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";
import { RouteComponentProps } from '@reach/router'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = { 
  email: string,
  password: string,
  firstName: string,
  lastName: string
}


export const Register = (props: RouteComponentProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch("email")) 
  console.log(watch("password")) 
  console.log(watch("firstName")) 
  console.log(watch("lastName")) 
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{
          display: 'flex',
          flexDirection: 'column',
        //   alignItems: 'center',
          minWidth: 400
      }} >
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
        <input
          className="le-input"
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />
        <input
          className="le-input"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        {errors.email && <span>Email field is required</span>}
        {errors.password && <span>Password field is required</span>}
        {errors.firstName && <span>First Name field is required</span>}
        {errors.lastName && <span>Last Name field is required</span>}
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minWidth: 400
      }} >
        {/* <SecondaryBtnOutline text="SIGN IN" />
        <PrimaryBtn text="REGISTER" /> */}
        <input type='submit' value='SIGN IN' className='secondary-outline-btn' />
        <input type='submit' value='REGISTER' className='primary-btn' />
      </div>
      </form>
    </div>
  );
};
