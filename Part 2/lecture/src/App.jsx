const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <ul>
          {notes.map((note, i) => (
            <li key={i}>{note.content}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default App;
