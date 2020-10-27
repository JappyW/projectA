import ContactsTable from "components/ContactsTable";
import React, { useEffect } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import ContactsFilters from "components/ContactsFilters";

const View = (props) => {
	const { fetchContacts, contacts, setContactsFilters } = props;

	useEffect(() => {
		fetchContacts();
	}, [fetchContacts]);
	console.log(contacts);
	return (
		<Paper style={{ marginTop: "5rem" }}>
			<Grid container className="contacts" style={{ padding: "2rem" }}>
				<Grid
					container
					justify="center"
					alignItems="center"
					styles={{ padding: "5rem" }}
				>
					<Grid item xs={12} style={{ padding: "3rem 3rem 0 3rem" }}>
						<ContactsFilters
							setContactsFilters={setContactsFilters}
						></ContactsFilters>
					</Grid>

					<Grid item xs={12} style={{ padding: "3rem" }}>
						<ContactsTable
							contactsCollection={contacts}
							setContactsFilters={setContactsFilters}
						></ContactsTable>
					</Grid>

					{contacts.meta && (
						<Paper style={{ padding: "2rem" }}>
							<Grid container justify="start" alignItems="center">
								<div>
									<span>Collection size:</span>
									<span>{contacts.meta.total}</span>
								</div>
							</Grid>
						</Paper>
					)}
				</Grid>
			</Grid>
		</Paper>
	);
};

export { View };
