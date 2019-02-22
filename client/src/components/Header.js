import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui huge inverted menu">
      <Link to="/" className="item" style={{ color: "#C3A0DE" }}>
        Home
      </Link>
      <Link to="/idea/all" className="item" style={{ color: "#C3A0DE" }}>
        All Ideas
      </Link>
      <Link to="/idea/new" className="item" style={{ color: "#C3A0DE" }}>
        New Idea
      </Link>
      <Link to="/ideas/search" className="item" style={{ color: "#C3A0DE" }}>
        Search
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
