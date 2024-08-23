import axios from "axios";
import { configuration } from "../config/configuration";

axios.defaults.baseURL = configuration.BASE_URL;
axios.defaults.timeout = configuration.TIME_OUT;

axios.defaults.headers.common = {
	Accept: "application/json", // el formato que espero que la info vuelva
	"Content-Type": "application/json", // el formato en que le mando la info
};

export default axios;
