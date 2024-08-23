import React from "react";
import HomePageUI from "./HomePageUI";
import { getCountries } from "../../../networking/services/getCountries";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setCountriesData } from "../../../redux/slices/countriesSlice";

function HomePage() {
	const dispatch = useDispatch<AppDispatch>();

	React.useEffect(() => {
		async function fetchCountriesData() {
			const data = await getCountries();
			dispatch(setCountriesData(data));
		}
		fetchCountriesData();
	}, [dispatch]);

	return <HomePageUI />;
}

export default HomePage;
