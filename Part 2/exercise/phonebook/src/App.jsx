import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNameObject = {
      name: newName,
    };
    setPersons(persons.concat(newNameObject));
    setNewName('');
    console.log(persons);
  };

  // ////
  // event.preventDefault();
  // const noteObject = {
  //   content: newNote,
  //   important: Math.random() < 0.5,
  //   id: String(notes.length + 1),
  // };

  // setNotes(notes.concat(noteObject));
  // setNewNote('');
  // ///

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
