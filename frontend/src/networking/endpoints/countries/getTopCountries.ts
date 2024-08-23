import api from "../../api";
import { configuration } from "../../../config/configuration";

const getTopCountries = async () => {
	try {
		const response = await api.get(configuration.BASE_URL + "countries/top");

		const data = await response.data;
		return data;
	} catch (error: any) {
		throw new Error(
			error.response?.data?.error ||
				"An error occurred while fetching the top countries"
		);
	}
};

export default getTopCountries;
