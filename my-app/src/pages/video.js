import React from "react";
import Comments from "../comments/comments.js";

const Video = () => {
  return (
    <div className="FishVideo">
      <video width="750" height="500" controls>
        <source src="Liikakalastus.mp4" type="video/mp4" />
      </video>
      <p>Miksi meidän tulisi välittää liikakalastuksesta?</p>
      <h2 className="comments">Comments</h2>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default Video;
