import ContactsTable from "components/ContactsTable";
import React, { useEffect } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import {
	Replay as ReplayIcon,
	ViewList as ViewListIcon,
	ViewModule as ViewModuleIcon,
} from "@material-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ContactsFilters from "components/ContactsFilters";
import TablesPagination from "components/TablesPagination";
import { useTableStyles } from "components/app/styles";
import { CardItem } from "components/card/view";
import { useToasts } from "react-toast-notifications";

const View = (props) => {
	const { fetchContacts, contacts, setContactsFilters, error } = props;

	const { meta, data = [] } = contacts;
	const { current_page = 0, total = 0, per_page = 10 } = meta || {};

	const [view, setView] = React.useState(localStorage.getItem("view"));
	const [genderPrevail, setGenderPrevail] = React.useState();
	const [genderPrevailString, setGenderPrevailString] = React.useState();
	const { addToast } = useToasts();

	const classes = useTableStyles();

	const map = new Map();

	const calculateNationalities = (contacts) => {
		contacts.map((item) => {
			map.set(item.nationality, 0);
		});
		const nationalities = Object.fromEntries(map);
		contacts.map((item) => {
			map.forEach((value, key) => {
				if (key === item.nationality) {
					nationalities[key]++;
				}
			});
		});
		return nationalities;
	};

	useEffect(() => {
		if (error) {
			addToast(error, {
				appearance: "error",
			});
		}
	}, [error]);

	useEffect(() => {
		if (contacts.stats) {
			setGenderPrevail(
				Math.max(
					contacts.stats.woman,
					contacts.stats.man,
					contacts.stats.otherGenders
				)
			);
			setGenderPrevailString(
				genderPrevail === contacts.stats.woman
					? "Woman"
					: genderPrevail === contacts.stats.man
					? "Man"
					: "Other genders"
			);
		}
	}, [contacts]);

	useEffect(() => {
		fetchContacts();
	}, []);

	const handleChange = (event, nextView) => {
		setView(nextView);
		localStorage.setItem("view", nextView);
	};

	const handleChangePage = (pageNumber) => {
		setContactsFilters({
			page: pageNumber,
			per_page,
		});
	};

	const handleChangeRowsPerPage = (event) => {
		const { value } = event.target;
		setContactsFilters({
			page: Math.floor(total / value),
			per_page: value,
		});
	};

	return (
		<div style={{ padding: "2rem" }}>
			<Grid container justify="space-between" style={{ padding: "1rem" }}>
				<Typography
					variant="h3"
					component="h2"
					style={{ color: "#20346b" }}
				>
					{" "}
					Contacts
				</Typography>
				<ToggleButtonGroup
					orientation="horizontal"
					value={view}
					exclusive
					onChange={handleChange}
				>
					<ToggleButton value="table" aria-label="table">
						<ViewListIcon />
					</ToggleButton>
					<ToggleButton value="card" aria-label="card">
						<ViewModuleIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Grid>
			<Paper>
				<Grid container>
					<Grid item xs={12} style={{ padding: "1rem" }}>
						<ContactsFilters
							setContactsFilters={setContactsFilters}
						></ContactsFilters>
					</Grid>
				</Grid>
			</Paper>
			<Paper style={{ marginTop: "2rem", padding: "2rem" }}>
				<Grid container justify="center">
					<Button
						type="submit"
						onClick={fetchContacts}
						variant="contained"
						style={{
							borderRadius: "50%",
							height: "3.5rem",
							width: "3.5rem",
						}}
					>
						<ReplayIcon />
					</Button>
				</Grid>
				<Grid container className="contacts">
					<Grid
						container
						justify="center"
						alignItems="center"
						styles={{ padding: "5rem" }}
					>
						<Grid container>
							{view === "table" ? (
								<Grid item xs={12} style={{ padding: "1rem" }}>
									<ContactsTable
										contactsCollection={contacts}
										setContactsFilters={setContactsFilters}
									></ContactsTable>
								</Grid>
							) : (
								<Grid
									container
									justify="space-between"
									alignItems="space-between"
									style={{ padding: "1rem" }}
								>
									{data.map((contact) => {
										return (
											<Grid
												item
												style={{ marginBottom: "2rem" }}
											>
												<CardItem contact={contact} />
											</Grid>
										);
									})}
								</Grid>
							)}
						</Grid>
						{contacts.data?.length ? null : (
							<Typography
								variant="h3"
								component="h2"
								style={{ color: "#20346b" }}
							>
								No contacts found
							</Typography>
						)}
						{contacts.meta && contacts.stats && (
							<Grid
								container
								direction="column"
								justify="center"
								style={{ margin: "2rem" }}
							>
								<Grid container justify="flex-start">
									<Grid
										item
										style={{
											marginRight: "20px",
										}}
									>
										<p style={{ fontSize: "2vw" }}>
											Collection size:
										</p>
										<span style={{ fontSize: "3vw" }}>
											{contacts.meta.total}
										</span>
									</Grid>

									<Grid
										item
										style={{
											display: "flex",
										}}
									>
										<Grid
											style={{
												marginRight: "20px",
											}}
										>
											<p style={{ fontSize: "2vw" }}>
												Man:
											</p>
											<span style={{ fontSize: "3vw" }}>
												{contacts.stats.man}
											</span>
										</Grid>
										<Grid
											style={{
												marginRight: "20px",
											}}
										>
											<p style={{ fontSize: "2vw" }}>
												Woman:
											</p>
											<span style={{ fontSize: "3vw" }}>
												{contacts.stats.woman}
											</span>
										</Grid>
										<Grid>
											<p style={{ fontSize: "2vw" }}>
												Other genders:
											</p>
											<span style={{ fontSize: "3vw" }}>
												{contacts.stats.otherGenders}
											</span>
										</Grid>
									</Grid>
								</Grid>
								<span
									style={{
										marginLeft: "15vw",
										fontSize: "2vw",
										backgroundColor: "#d7b758de",
										display: "table",
									}}
								>
									{genderPrevailString} prevail
								</span>
								<Grid>
									<Paper
										style={{
											padding: "2rem",
											marginTop: "1rem",
										}}
									>
										{Object.entries(
											calculateNationalities(data)
										).map(([key, value]) => {
											return (
												<div>
													<span
														style={{
															fontWeight: "bold",
															fontSize: "2vw",
														}}
													>
														{key}:
													</span>
													<span> {value}</span>
												</div>
											);
										})}
									</Paper>
								</Grid>
							</Grid>
						)}
						<TablesPagination
							className={classes.pagination}
							tableCurrentPage={current_page}
							tablePerPage={per_page}
							totalPage={total}
							changePage={handleChangePage}
							changeRowsPerPage={handleChangeRowsPerPage}
						/>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export { View };
