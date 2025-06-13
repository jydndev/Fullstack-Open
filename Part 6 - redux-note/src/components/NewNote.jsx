import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';
import noteService from '../services/notes';

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    dispatch(createNote(content));
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
