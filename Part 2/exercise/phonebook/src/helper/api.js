import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const save = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((res) => res.data);
};

export default { save };
