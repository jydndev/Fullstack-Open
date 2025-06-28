import { useApolloClient, useQuery, useSubscription } from '@apollo/client';
import { ALL_PERSONS, PERSON_ADDED } from './queries';

import { useState } from 'react';

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Notify from './components/Notify';
import PhoneForm from './components/PhoneForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_PERSONS);
  const [token, setToken] = useState(null);
  const client = useApolloClient();

  useSubscription(PERSON_ADDED, {
    onData: ({ data, client }) => {
      const addedPerson = data.data.personAdded;
      notify(`${addedPerson.name} added`);
    },
  });

  if (result.loading) {
    return <div>loading...</div>;
  }

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  if (!token) {
    return (
      <>
        <Notify errorMessage={errorMessage} />
        <LoginForm setToken={setToken} setError={notify} />
      </>
    );
  }

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <PersonForm setError={notify} />
      <button onClick={logout}>logout</button>
      <Persons persons={result.data.allPersons} />

      <PhoneForm setError={notify} />
    </div>
  );
};

export default App;
