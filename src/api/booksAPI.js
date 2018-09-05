import axios from 'axios';

export default () =>
  axios.get('http://localhost:3000/books', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.data)
    .catch(err => {
      throw err;
    });