// function to delete a comment

const handleCommentDelete = (index, prevComments, setComments) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments.splice(index, 1);
      return newComments;
    });
  };
  
  export default handleCommentDelete;
  