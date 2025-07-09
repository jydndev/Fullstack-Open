import { useEffect, useState } from 'react';
import axios from 'axios';

interface Note {
  id: string;
  content: string;
}

function Form() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    axios
      .post<Note>('http://localhost:3001/notes', { content: newNote })
      .then((response) => {
        setNotes(notes.concat(response.data));
      });
    // const noteToAdd = {
    //   content: newNote,
    //   id: String(notes.length + 1),
    // };
    // setNotes(notes.concat(noteToAdd));
    setNewNote('');
  };

  useEffect(() => {
    axios.get<Note[]>('http://localhost:3001/notes').then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      <form onSubmit={noteCreation}>
        <input
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
