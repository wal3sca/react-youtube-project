import React from "react";
import Form from "./Form";

class Comment extends React.Component {
  render() {
    const { comment, remove } = this.props;
    return (
      <li className="comment">
        {comment.text}
        <button onClick={() => remove(comment.id)}>Delete</button>
      </li>
    );
  }
}

export default Comment;
