import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNum,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      setPersons(persons.concat(newNameObject));
    }

    setNewName('');
    setNewNum('');
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNum = (e) => {
    setNewNum(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNewNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
