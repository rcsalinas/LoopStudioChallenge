import axios from "axios";
const endpoint = "https://restcountries.com/v3.1/all";

interface Country {
	label: string;
	id: string;
}

export const getCountries = async (): Promise<Country[]> => {
	const response = await axios.get(endpoint);
	const countries = response.data;

	let result = [];

	for (const country of countries) {
		result.push({
			label: country.name?.common,
			id: country.cca2,
		});
	}

	return result;
};
