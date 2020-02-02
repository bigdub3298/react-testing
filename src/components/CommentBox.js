import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };

  handleSubmit = e => {
    e.preventDefault();

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

export default CommentBox;
