import React, { useState } from "react";

// Handles the new comments written
export function CommentForm({ onSubmit: onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      onSubmit(comment);
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
