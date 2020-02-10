import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderCommentList() {
    return this.props.comments.map((comment, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content" style={{ color: "red" }}>
            <i className="times icon"></i>
          </div>
          <div className="content">
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
  return { comments: state.comments };
};
export default connect(mapStateToProps)(CommentList);
