import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui huge inverted menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/idea/all" className="item">
        All Ideas
      </Link>
      <Link to="/idea/new" className="item">
        New Idea
      </Link>
      <Link to="/ideas/search" className="item">
        Search
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
