import axios from 'axios';

const authUser = JSON.parse(sessionStorage.getItem('user'))
console.log("in token",authUser)
console.log(authUser)
const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${authUser?.user?.token}`
  },
});


export default instance;
