import axios from "axios";

export const api = axios.create({
  baseURL: "https://nlw7heat.herokuapp.com/",
});
