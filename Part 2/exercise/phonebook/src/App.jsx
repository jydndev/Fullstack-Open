import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import helper from './helper/api';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    helper
      .fetch()
      .then((fetchedPersons) => {
        setPersons(fetchedPersons);
        console.log('fetch data from server');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNum,
    };

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        confirm(
          `${newName} is already added to phonebook. Would you like to replace the old number with the new one?`
        )
      ) {
        helper
          .updateNum(existingPerson.id, newNameObject)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            );
          });
      } else {
        return;
      }
    } else {
      helper.save(newNameObject).then((data) => {
        setPersons(persons.concat(data));
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
    if (window.confirm('do you want to delete the contact?')) {
      helper.deleteNum(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    } else {
      return;
    }
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
