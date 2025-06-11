import noteReducer from '../reducers/noteReducer';

const generateId = () => {
  Number((Math.random() * 1000000).toFixed(0));
};

const App = () => {
  const addNote = (e) => {};

  const toggleImportance = (id) => {};

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {noteReducer.store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content}
            <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
