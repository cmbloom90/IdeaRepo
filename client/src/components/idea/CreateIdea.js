import React from "react";
import { connect } from "react-redux";
import { createIdea } from "../../actions";
import IdeaForm from "./IdeaForm";

class CreateIdea extends React.Component {
  onSubmit = formValues => {
    this.props.createIdea(formValues);
  };

  render() {
    return (
      <div className="ui raised segment">
        <h1>
          <u>Create an Idea</u>
        </h1>
        <IdeaForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createIdea }
)(CreateIdea);
