import React from "react";
import logo from "../logo.svg";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";

export const Signin = () => {
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
      </div>
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minWidth: 400
      }} >
        <SecondaryBtnOutline text="REGISTER" />
        <PrimaryBtn text="SIGN IN" />
      </div>
    </div>
  );
};
