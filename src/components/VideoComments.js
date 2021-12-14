import React from "react";
import Comments from "./Comments";
import Form from "./Form";
import YouTube from "";

class VideoComments extends React.Component {
  state = {
    comment: "",
    comments: [],
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: uuid(),
      text: this.state.comment,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  remove = (id) => {
    this.setState({
      comments: this.state.comments.filter(
        (newComment) => newComment.id !== id
      ),
    });
  };

  render() {
    const { comments } = this.state;
    const commentList = comments.map((comment) => {
      return (
        <Comments
          comment={comment}
          remove={this.remove}
          key={comment.id}
          text={comment.text}
        />
      );
    });
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="oneVideo">
          <YouTube videoId={`${id}`} />
        </div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          className="Comment"
        />
        <h3>Comments:</h3>
        <ul>{commentList}</ul>
      </div>
    );
  }
}

export default VideoComments;
