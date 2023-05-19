import React, { useState } from "react";
import { CommentForm } from "../components/Comment";

const Video = () => {
  const [comments, setComments] = useState([]);

  const handleSubmit = (comment) => {
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
      const newComments = [...prevComments];
      newComments[index] = {
        ...newComments[index],
        votes: newComments[index].votes + increment,
      };
      return newComments;
    });
  };

  const handleCommentDelete = (index) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments.splice(index, 1);
      return newComments;
    });
  };

  return (
    <div className="FishVideo">
      <video width="750" height="500" controls>
        <source src="Liikakalastus.mp4" type="video/mp4" />
      </video>
      <p>Miksi meidän tulisi välittää liikakalastuksesta?</p>
      <h2 className="Comments-h2">Comments</h2>
      <section>
        <CommentForm onSubmit={handleSubmit} />
        {comments.length > 0 && (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <span className="Comments">{comment.text}</span>
                <span className="Votes">{comment.votes}</span>
                <button className="Upvote-nappi" onClick={() => handleVote(index, 1)}>Upvote</button>
                <button className="Downvote-nappi" onClick={() => handleVote(index, -1)}>Downvote</button>
                <button className="Delete-nappi" onClick={() => handleCommentDelete(index)}>Delete</button>
                <span className="Timestamp">{comment.timestamp}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Video;
