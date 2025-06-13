import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

export const getNotes = () => axios.get().then((res) => res.data);

export const createNote = (newNote) => {
  axios.post(baseUrl, newNote).then((res) => res.data);
};

export const updateNote = (updatedNote) =>
  axios.put(`${baseUrl}/${updatedNote.id}`).then((res) => res.data);
