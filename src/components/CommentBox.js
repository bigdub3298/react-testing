import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <h3>Add a Comment</h3>
        <div className="field">
          <textarea
            onChange={e => this.setState({ comment: e.target.value })}
            name="comment"
            placeholder="Comment"
            value={this.state.comment}
          ></textarea>
        </div>
        <button className="ui button" type="submit">
          Submit Comment
        </button>
      </form>
    );
  }
}

export default connect(null, {
  saveComment
})(CommentBox);
