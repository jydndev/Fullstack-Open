import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const save = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((res) => res.data);
};

const deleteNum = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

const updateNum = (newObject, id) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((res) => res.data);
};
//todo finish implementing update feature

export default { save, deleteNum, updateNum };
