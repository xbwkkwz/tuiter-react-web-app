import axios from 'axios';
// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://tuiter-node-server-app-i8h6.onrender.com/api/tuits';
// new server api for mongodb: "https://tuiter-node-mongodb.onrender.com/api"
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
}

export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_API}/${tid}`);
  return response.data; // no need to use
}

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit);
  return response.data;
}

export const updateTuit = async (tuit) => {
  await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}
