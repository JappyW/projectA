import React, { useState } from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@material-ui/core";
import ContactsTableHead from "./ContactsTableHead";
import { useTableStyles } from "components/app/styles";

const ContactsTable = (props) => {
	const { contactsCollection, setContactsFilters } = props;
	const classes = useTableStyles();

	// ----------------------------------------------------
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("fullname");

	// ----------------------------------------------------
	const { meta, data = [] } = contactsCollection;
	const { per_page = 10 } = meta || {};

	// ----------------------------------------------------

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		const orderByType = isAsc ? "desc" : "asc";

		setContactsFilters({
			order_by: property,
			order_type: orderByType,
			page: 1,
			per_page,
		});

		setOrder(orderByType);
		setOrderBy(property);
	};

	// -----------------------------------------
	const contactsColumns = [
		{ id: "fullname", label: "Fullname", maxWidth: 170, align: "left" },
		{ id: "email", label: "Email", maxWidth: 100, align: "center" },
		{ id: "phone", label: "Phone", maxWidth: 100, align: "center" },
		{ id: "gender", label: "Gender", maxWidth: 100, align: "center" },
		{ id: "birth", label: "Birthday", maxWidth: 100, align: "center" },
		{ id: "country", label: "Country", maxWidth: 100, align: "center" },
		{ id: "city", label: "City", maxWidth: 100, align: "center" },
		{ id: "street", label: "Street", maxWidth: 100, align: "center" },
		{ id: "region", label: "Region", maxWidth: 100, align: "center" },
		{
			id: "index",
			label: "Index",
			numeric: true,
			maxWidth: 100,
			align: "center",
		},
		{
			id: "home_number",
			label: "Home number",
			numeric: true,
			maxWidth: 100,
			align: "center",
		},
		{
			id: "nationality",
			label: "Nationality",
			maxWidth: 170,
			align: "center",
		},
	];

	return (
		<Paper className={classes.paper}>
			<TableContainer className={classes.tableContainer}>
				<Table size="medium" stickyHeader aria-label="sticky table">
					<ContactsTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
						columns={contactsColumns}
					/>
					<TableBody>
						{data.map((row) => {
							return (
								<TableRow
									hover
									role="checkbox"
									tabIndex={-1}
									key={row.id}
									className="table-row"
								>
									{contactsColumns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell
												key={column.id}
												align={column.align}
												className="table-cell"
											>
												{column.id === "email" ? (
													<a href={`mailto:${value}`}>
														{value}
													</a>
												) : (
													value
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

// -------------------------------------------------
export default ContactsTable;
