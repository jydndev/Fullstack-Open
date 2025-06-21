import { useState } from 'react';

import { useMutation } from '@apollo/client';

import { EDIT_NUMBER } from '../queries';

const PhoneForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [changeNumber] = useMutation(EDIT_NUMBER);

  const submit = (e) => {
    e.preventDefault();

    changeNumber({ variables: { name, number } });

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          number
          <input
            value={number}
            onChange={({ target }) => setNumber(target.value)}
          />
        </div>
      </form>
      <button type="submit">submit</button>
    </div>
  );
};

export default PhoneForm;
