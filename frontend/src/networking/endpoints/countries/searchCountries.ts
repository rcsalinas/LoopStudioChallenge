import api from "../../api";
import { configuration } from "../../../config/configuration";

interface SearchCountriesParams {
	query: string;
}

const searchCountries = async (params: SearchCountriesParams) => {
	try {
		const response = await api.get(
			configuration.BASE_URL + "countries/search",
			{
				params,
			}
		);

		const data = await response.data;
		return data;
	} catch (error: any) {
		throw new Error(
			error.response?.data?.error ||
				"An error occurred while searching for countries"
		);
	}
};

export default searchCountries;
