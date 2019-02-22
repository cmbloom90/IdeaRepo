import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Landing = () => {
  return (
    <div>
      <div className="ui big message" style={{ backgroundColor: "#fbbd08c4" }}>
        <p>
          <b>
            Do you have a programming idea and want a place to show it off? Just
            log in with Google and get started
          </b>
        </p>
        <GoogleAuth />
      </div>
      <div className="ui compact raised segments">
        <div className="ui black segment">
          <Link to="/ideas/search">Search</Link>
        </div>
        <div className="ui black segment">
          <Link to="/idea/new">Create an Idea</Link>
        </div>
        <div className="ui black segment">
          <Link to="/idea/all">All Ideas</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
