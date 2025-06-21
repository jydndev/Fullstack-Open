import { useState } from 'react';

import { useMutation } from '@apollo/client';

import { EDIT_NUMBER } from '../queries';

const PhoneForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [changephone] = useMutation(EDIT_NUMBER);

  const submit = (e) => {
    e.preventDefault();

    changephone({ variables: { name, phone } });

    setName('');
    setPhone('');
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
          phone
          <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
      </form>
      <button type="submit">submit</button>
    </div>
  );
};

export default PhoneForm;
