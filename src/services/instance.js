import axios from "axios";
import moment from "moment";

//const baseURL = "https://okibackend.herokuapp.com/api/";
const baseURL = "http://localhost:8000/api/";


function token() {
  return window.localStorage.getItem("oki-token");
}

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async function (config) {
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    }
    console.log("alguien me intercepto puto 2", config);

    let dateExpirate = moment(window.localStorage.getItem("time-token"));
    let diff = dateExpirate.diff(moment(), "seconds");
    if (diff < 90) {
      //alert("se vencio su token puto refreque");
      // let refresh = window.localStorage.getItem("oki-refresh");
      // let time = moment().add(2, "m").toDate();
      // let response = await serviceRefreshToken(refresh);
      // window.localStorage.setItem("time-token", time);
      // window.localStorage.setItem("oki-token", response.data.access);
      // window.localStorage.setItem("oki-refresh", response.data.refresh);
    }
    return config;
  },
  function (error) {
    console.log("alguien me intercepto puto");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
export default instance;
