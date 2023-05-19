
// Function to handle vote. It is either negative or postive
const handleVote = (index, increment, prevComments, setComments) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      newComments[index] = {
        ...newComments[index],
        votes: newComments[index].votes + increment,
      };
      return newComments;
    });
  };
  
  export default handleVote;
  