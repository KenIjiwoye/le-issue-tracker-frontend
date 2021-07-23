import React from "react";
import logo from "../logo.svg";
import avatar from "../avatar.png";
import { RouteComponentProps } from "@reach/router";

interface NavbarProps extends RouteComponentProps{
  signOut:Function;
  user: any;
}

export const Navbar = ({signOut,user}:NavbarProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
        borderBottom: '2px solid #f2f2f2'
      }}
    >
      <div>
        <img src={logo} width="150" height="60" alt="Link Empower Logo" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 250,
          alignItems: "center",
          height: 70,
        }}
      >
        <img src={avatar} width="50" height="50" alt="" />
        <p>{user && JSON.parse(user)}</p>
        <span onClick={() => signOut()} className="material-icons">logout</span>
      </div>
    </div>
  );
};
