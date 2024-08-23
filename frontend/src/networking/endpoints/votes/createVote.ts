import api from "../../api";
import { configuration } from "../../../config/configuration";

interface VoteData {
	name: string;
	email: string;
	alpha2Code: string;
}

const createVote = async (voteData: VoteData) => {
	try {
		const response = await api.post(configuration.BASE_URL + "votes", voteData);

		const data = await response.data;
		return data;
	} catch (error: any) {
		throw new Error(
			error.response?.data?.error || "An error occurred while creating the vote"
		);
	}
};

export default createVote;
