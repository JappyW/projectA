import axios from "axios";
export const CONTACTS = "https://projectaback.herokuapp.com/contacts";

export const getContactsCollection = async (filters) => {
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
		.post("https://projectaback.herokuapp.com/contacts", data)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return Promise.resolve(error.response.data);
		});
};
