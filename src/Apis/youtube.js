import axios from "axios";
const KEY = "AIzaSyCRNMq5mGgX8tPU40foHJKJue4NYWC-2Ks";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 7,
		key: `${KEY}`
	}
});
