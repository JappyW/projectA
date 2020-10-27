import axios from "axios";
export const CONTACTS = "http://localhost:8000/api/contacts";

export const getContactsCollection = async (filters) => {
	console.log(filters)
	return await axios
		.get(`${CONTACTS}`, {params: filters})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return Promise.resolve(error.response.data);
		});
};

export const createContact = async (data) => {
	return await axios
		.post("localhost:8000/contacts", data)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return Promise.resolve(error.response.data);
		});
};
