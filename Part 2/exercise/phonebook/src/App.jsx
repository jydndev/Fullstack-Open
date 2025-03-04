import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import helper from './helper/api';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

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

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

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
            showMessage(`${existingPerson.name} has been updated`);
          })
          .catch((err) => {
            setErrMessage(
              `Information of ${existingPerson.name} has already been removed from server.`
            );
          });
      } else {
        return;
      }
    } else {
      helper.save(newNameObject).then((data) => {
        setPersons(persons.concat(data));
        showMessage(`${newNameObject.name} has been added`);
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

  const handleDelete = (id) => {
    if (window.confirm('do you want to delete the contact?')) {
      const personToDelete = persons.find((person) => person.id === id);
      helper
        .deleteNum(id)
        .then(() => {
          showMessage(`${personToDelete.name} has been deleted`);
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((err) => {
          console.log('fail');
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type="success" />
      <Notification message={errMessage} type="error" />
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
