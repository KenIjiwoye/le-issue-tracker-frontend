import React from "react";
import logo from "../logo.svg";
import avatar from "../avatar.png";

export const Navbar = () => {
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
          width: 150,
          alignItems: "center",
          height: 70,
        }}
      >
        <img src={avatar} width="50" height="50" alt="" />
        <p>Ken Ijiwoye</p>
      </div>
    </div>
  );
};
