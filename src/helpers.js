import axios from "axios";
import { API_URL } from "./config";

export const fetchEmployeeDetails = async () => {
	try {
		const resp = await axios.get(API_URL);
		const { name, email } = resp.data.results[0];
		localStorage.setItem("employee", JSON.stringify(formatEmployeeDetails(name, email)));
		window.dispatchEvent(new Event("storage"));
	} catch (err) {
		console.log(err);
	}
};

export const formatEmployeeDetails = (name, email) => {
	return {
		name: Object.values(name).join(" "),
		email: email,
	};
};

export const getEmployeeData = () => {
	return JSON.parse(localStorage.getItem("employee"));
};
