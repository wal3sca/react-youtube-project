import React from "react";

class Team extends React.Component {
  render() {
    return (
      <h1>
        <div class="title">
          <p>
            We are full stack engineer fellows of Pursuit based out of Queens,
            New York. For this project, we used React to create a unique YouTube
            inspired web design. Click the link below to get to know us
            individually and how we collaborated to put this project together.
          </p>
          {/* <a target="_blank" href="http://codepen.io/Moslim/" class="white-mode">OTHER PENS</a> */}
        </div>
        <p>
          <span onClick={this.props.removeButtonClick}>Meet The Team</span>
        </p>
      </h1>
    );
  }
}

export default Team;
