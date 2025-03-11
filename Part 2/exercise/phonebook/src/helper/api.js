import axios from 'axios';

const baseUrl = '/api/persons';

const fetch = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const save = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((res) => res.data);
};

const deleteNum = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

const updateNum = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((res) => res.data);
};

export default { fetch, save, deleteNum, updateNum };
