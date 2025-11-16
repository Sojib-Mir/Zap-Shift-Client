import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-end">
        <img src={logo} alt="Logo" />
        <div className="text-3xl font-bold -ms-2.5">ZapShift</div>
      </div>
    </Link>
  );
};

export default Logo;
