import axios from 'axios';

export default (authToken) =>
  axios.get('http://localhost:3000/users/me', {
    headers: {
      'Content-Type': 'application/json',
      'x-auth': authToken
    }
  }).then(response => response.data)
    .catch(err => {
      throw err;
    });