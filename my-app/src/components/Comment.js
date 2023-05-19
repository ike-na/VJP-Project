import React, { useState } from "react";

export function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      onCommentSubmit(comment);
      setComment("");
    }
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <textarea
          className="tekstikenttä"
          value={comment}
          onChange={handleChange}
        />
        <button className="nappi" type="submit">
          Lähetä
        </button>
      </div>
    </form>
  );
}
