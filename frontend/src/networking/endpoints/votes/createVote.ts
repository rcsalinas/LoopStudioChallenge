import api from "../../api";
import { configuration } from "../../../config/configuration";
import { ErrorResponse, Response } from "../../../interfaces/apiInterfaces";

interface VoteData {
	name: string;
	email: string;
	countryCode: string;
}

const createVote = async (voteData: VoteData) => {
	try {
		const response = await api.post(configuration.BASE_URL + "votes", voteData);

		const data = await response.data;

		const responseMessage: Response = {
			responseMessage: data.message,
			statusCode: response.status,
		};
		return responseMessage;
	} catch (error: any) {
		console.log(error);
		const errorResponse: ErrorResponse = {
			errorMessage: error.response?.data?.message,
			statusCode: error.response?.status,
		};
		throw errorResponse;
	}
};

export default createVote;
