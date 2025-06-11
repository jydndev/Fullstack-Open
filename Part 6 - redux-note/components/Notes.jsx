import { toggleImportanceOf } from '../reducers/noteReducer';
import { useDispatch, useSelector } from 'react-redux';

const Note = () => {
  return <div></div>;
};

const Notes = () => {
  const notes = useSelector((state) => state);

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note.id)}>
          {note.content}
          <strong>{note.important ? 'important' : ''}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
