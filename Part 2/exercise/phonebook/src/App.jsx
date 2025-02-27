import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import helper from './helper/api';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNum,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
    } else {
      helper.save(newNameObject).then((res) => {
        setPersons(persons.concat(res));
      });
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

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.includes(filter)
  );

  //todo alert popup
  const handleDelete = (id) => {
    helper.deleteNum(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        handleNewName={handleNewName}
        handleNewNum={handleNewNum}
        handleSubmit={handleSubmit}
        newName={newName}
        newNum={newNum}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deleteNum={handleDelete} />
    </div>
  );
};

export default App;
