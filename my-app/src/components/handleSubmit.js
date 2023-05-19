
// function to submit new comment with a timestamp
const handleSubmit = (comment, comments, setComments) => {
    const timestamp = new Date().toLocaleString();
    const newComment = {
      text: comment,
      timestamp: timestamp,
      votes: 0,
    };
    setComments([...comments, newComment]);
  };
  
  export default handleSubmit;
  