import { useState } from 'react';

const App2 = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleRandomNum = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const getMostVotedAnecdote = () => {
    let maxVote = 0;
    let mostVotedIndex = 0;
    let anyVotes = false;

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > maxVote) {
        maxVote = votes[i];
        mostVotedIndex = i;
        anyVotes = true;
      } else if (votes[i] > 0) {
        anyVotes = true;
      }
    }
    if (anyVotes) {
      return anecdotes[mostVotedIndex];
    } else {
      return null;
    }
  };

  const mostVoted = getMostVotedAnecdote();

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandomNum}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      {mostVoted && <p>{mostVoted}</p>}
    </>
  );
};

export default App2;
