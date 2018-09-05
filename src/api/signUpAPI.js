import axios from 'axios';

export default (user) =>
  axios.post('http://localhost:3000/users',
    {...user},
    {headers: {'Content-Type': 'application/json'}})
    .then((response) => response)
    .catch(err => {
      throw err;
    });