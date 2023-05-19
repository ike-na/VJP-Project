import React, { useState } from "react";
import thrashPic from "../images/delete.png"
import { CommentForm } from "../components/Comment";

const Video = () => {       
  const [comments, setComments] = useState([]);
  
  // submits a comment with a text and timestamp
  const handleSubmit = (comment) => {
    const timestamp = new Date().toLocaleString();
    const newComment = {text: comment,timestamp: timestamp,votes: 0};
    setComments([...comments, newComment]);
  };

  // adds an increment to vote counter, can be either negative or positive
  const handleVote = (index, increment) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments[index] = {...newComments[index],votes: newComments[index].votes + increment};
      return newComments;
    });
  };

  // deletes a comment
  const handleCommentDelete = (index) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments.splice(index, 1);
      return newComments;
    });
  };

  // returns a video and its comments and other components
  return (
    <div className="FishVideo">
      <video width="750" height="500" controls>
        <source src={process.env.PUBLIC_URL + '/Liikakalastus.mp4'} type="video/mp4" />
      </video>
      <p>Liikakalastus paljastettuna - Kerro mielipiteesi ja tue kestävää kalastusta!</p>
      <h2 className="Comments-h2">Comments</h2>
      <section>
        <CommentForm onSubmit={handleSubmit} />
        {comments.length > 0 && ( 
          <div className="Comment-container">
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <div className="Comment-wrapper">
                    <span className="Comment-area">
                      {comment.text}
                      <button className="Delete-nappi" onClick={() => handleCommentDelete(index)}>
                      <img src={thrashPic} alt="Delete" /></button>
                      <div className="Timestamp">{comment.timestamp}</div>
                    </span>
                    <div className="Votes">{comment.votes}</div>
                    <div className="Comment-controls">
                    <button className="Upvote-nappi" onClick={() => handleVote(index, 1)}></button>
                    <button className="Downvote-nappi" onClick={() => handleVote(index, -1)}></button>               
                  </div>
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default Video;
