import React from "react";
import { CommentFrom } from "../components/Comment";

const Video = () => {
  return (
    <div className="FishVideo">
      <video width="750" height="500" controls>
        <source src="Liikakalastus.mp4" type="video/mp4" />
      </video>
      <p>Miksi meidän tulisi välittää liikakkalstuksesta?</p>
      <h2 className="comments">Comments</h2>
      <section><CommentFrom>
        
        </CommentFrom></section>
    </div>
  );
};

export default Video;
