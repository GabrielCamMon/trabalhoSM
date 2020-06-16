import axios from "axios";

export default axios.create({baseURL: "https://sys-colors.herokuapp.com/", responseType: "json"});