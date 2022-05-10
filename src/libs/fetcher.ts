import axios from "axios";

export const fetcher = async (url: string) => {
	const res = await axios.get(url);
	const data = await res.data;
	return data;
};
