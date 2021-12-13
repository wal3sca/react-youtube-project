import React from "react";
import "../style/Form.css";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div className="formComment">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="leave a comment"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
