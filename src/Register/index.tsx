import React from "react";
import logo from "../logo.svg";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";
import { RouteComponentProps } from '@reach/router'

export const Register = (props: RouteComponentProps) => {
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
      <div style={{
          display: 'flex',
          flexDirection: 'column',
        //   alignItems: 'center',
          minWidth: 400
      }} >
        <input
          className="le-input"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="le-input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="le-input"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          className="le-input"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
      </div>
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minWidth: 400
      }} >
        <SecondaryBtnOutline text="SIGN IN" />
        <PrimaryBtn text="REGISTER" />
      </div>
    </div>
  );
};
