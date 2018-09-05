import axios from 'axios';

export default (authToken) =>
  axios.delete('http://localhost:3000/users/me/token', {
    headers: {
      'Content-Type': 'application/json',
      'x-auth': authToken
    }
  }).then((response) => response)
    .catch(err => {
      throw err;
    });