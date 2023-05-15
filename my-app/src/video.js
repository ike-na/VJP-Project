const Video = () => {
  return (
    <div className="App">
      <video width="750" height="500" controls >
        <source src="video.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};
  
export default Video;