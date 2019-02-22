import React from "react";
import { connect } from "react-redux";
import { fetchIdea } from "../../actions";

class ShowIdea extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchIdea(id);
  }

  render() {
    if (!this.props.idea) {
      return <div>Loading...</div>;
    }

    const { title, author, language, description } = this.props.idea;

    return (
      <div className="ui raised segment">
        <h1>{title}</h1>
        <h3>{language}</h3>
        <h4>{author}</h4>
        <div className="ui divider" />
        <div className="ui segment">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { idea: state.ideas[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchIdea }
)(ShowIdea);
