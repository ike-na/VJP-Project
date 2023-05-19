import React, { useState } from "react";
import { CommentForm } from "../components/Comment";

const Video = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    const timestamp = new Date().toLocaleString();
    const newComment = {
      text: comment,
      timestamp: timestamp,
      votes: 0,
    };
    setComments([...comments, newComment]);
  };

  const handleVote = (index, increment) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index].votes += increment;
      return updatedComments;
    });
  };

  return (
    <div className="FishVideo">
      <video width="750" height="500" controls>
        <source src="Liikakalastus.mp4" type="video/mp4" />
      </video>
      <p>Miksi meidän tulisi välittää liikakalastuksesta?</p>
      <h2 className="comments">Comments</h2>
      <section>
        <CommentForm onCommentSubmit={handleCommentSubmit} />
        {comments.length > 0 && (
          <ul>
            {comments.map((comment, index) => ( 
              <li key={index}>
                <span>{comment.text}</span>
                <span className="vote-count">{comment.votes}</span>
                <button onClick={() => handleVote(index, 1)}>Upvote</button>
                <button onClick={() => handleVote(index, -1)}>Downvote</button>
                <span className="timestamp">{comment.timestamp}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Video;
