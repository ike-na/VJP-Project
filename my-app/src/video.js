import Comments from "./comments/comments.js";

const Video = () => {
  return (
    <div className="App">
      <video width="750" height="500" controls >
        <source src="video.mp4" type="video/mp4"/>
      </video>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};
  
export default Video;