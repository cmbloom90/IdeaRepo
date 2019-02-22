import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchIdea, editIdea } from "../../actions";
import IdeaForm from "./IdeaForm";

class EditIdea extends React.Component {
  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editIdea(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.idea) {
      return <div className="ui raised segment">Loading...</div>;
    }

    return (
      <div>
        <h2>Edit Your Idea</h2>
        <IdeaForm
          initialValues={_.pick(
            this.props.idea,
            "title",
            "author",
            "language",
            "description"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { idea: state.ideas[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchIdea, editIdea }
)(EditIdea);
