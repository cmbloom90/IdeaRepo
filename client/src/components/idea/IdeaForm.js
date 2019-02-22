import React from "react";
import { Field, reduxForm } from "redux-form";

class IdeaForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="ui inverted segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui large inverted form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter a Title"
          />
          <Field
            name="author"
            component={this.renderInput}
            label="Enter your Name"
          />
          <Field
            name="language"
            component={this.renderInput}
            label="Enter the Programming Language"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter a Description"
          />
          <button className="ui large button green">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.author) {
    errors.author = "You must enter a name";
  }
  if (!formValues.language) {
    errors.language = "you must enter a language";
  }
  if (!formValues.description) {
    errors.description = "You must enter a descrption";
  }

  return errors;
};

export default reduxForm({
  form: "ideaForm",
  validate
})(IdeaForm);
