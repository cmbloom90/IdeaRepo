import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import idea from "../images/idea.jpg";

const Landing = () => {
  return (
    <div>
      <div className="ui big message" style={{ backgroundColor: "#fbbd08c4" }}>
        <h2 style={{ color: "#3b1a82" }}>
          <b>
            Do you have a programming idea and want a place to show it off? Just
            log in with Google and get started...
          </b>
        </h2>
        <GoogleAuth />
      </div>
      <div>
        <img className="ui centered huge image" src={idea} alt="idea" />
      </div>

      <div
        className="ui horizontal raised segments"
        style={{ backgroundColor: "#000000" }}
      >
        <div
          className="ui center aligned segment"
          style={{ backgroundColor: "#C3A0DE" }}
        >
          <Link to="/ideas/search" style={{ color: "#3b1a82" }}>
            <b>Search</b>
          </Link>
        </div>
        <div
          className="ui center aligned segment"
          style={{ backgroundColor: "#C3A0DE" }}
        >
          <Link to="/idea/new" style={{ color: "#3b1a82" }}>
            <b>Create an Idea</b>
          </Link>
        </div>
        <div
          className="ui center aligned segment"
          style={{ backgroundColor: "#C3A0DE" }}
        >
          <Link to="/idea/all" style={{ color: "#3b1a82" }}>
            <b>All Ideas</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
