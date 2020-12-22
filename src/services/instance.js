import axios from "axios";

const baseURL = "http://localhost:8000/api";

function token () {
  return window.localStorage.getItem('okitoken')
}

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${token()}` 
  },
});

export default instance;
