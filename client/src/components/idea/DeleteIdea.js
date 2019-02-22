import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchIdea, deleteIdea } from "../../actions";

class DeleteIdea extends React.Component {
  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteIdea(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/idea/all" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.idea) {
      return "Are you sure you want to remove your idea?";
    }

    return `Are you sure you want to remove: ${this.props.idea.title}`;
  }

  render() {
    return (
      <Modal
        title="Remove Idea"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/idea/all")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { idea: state.ideas[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchIdea, deleteIdea }
)(DeleteIdea);
