import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchIdeas } from "../../actions";

class IdeaList extends React.Component {
  componentDidMount() {
    this.props.fetchIdeas();
  }

  renderAdmin(idea) {
    if (idea.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/idea/edit/${idea.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/idea/delete/${idea.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.ideas.map(idea => {
      return (
        <div
          className="item"
          key={idea.id}
          style={{ backgroundColor: "#f7d161a1" }}
        >
          {this.renderAdmin(idea)}
          <i className="large middle aligned icon lightbulb" />
          <div className="content">
            <Link to={`/idea/${idea.id}`} className="header">
              {idea.title}
            </Link>
            <div className="description">{idea.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/idea/new" className="ui large button primary">
            Create New Idea
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui raised segment" style={{ backgroundColor: "#C3A0DE" }}>
        <h1>
          <u>The Ideas</u>
        </h1>
        <div className="ui large animated celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ideas: Object.values(state.ideas),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchIdeas }
)(IdeaList);
