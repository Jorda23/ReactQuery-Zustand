import axios from "axios";
import {weatherApiUrl } from "../shared/utils/configEnv"

const weatherApi = axios.create({
  baseURL: weatherApiUrl
});

export default weatherApi;
