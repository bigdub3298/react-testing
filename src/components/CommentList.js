import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderCommentList() {
    return this.props.comments.map(comment => {
      return (
        <div className="item">
          <div className="right floated content" style={{ color: "red" }}>
            <i class="times icon"></i>
          </div>
          <div className="contnet">
            <div className="header">{comment}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui celled list">{this.renderCommentList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { comments: state.comments };
};
export default connect(mapStateToProps)(CommentList);
