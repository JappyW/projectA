import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Paper, Grid, FormControl, TextField, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useTableFilterStyles } from "../styles";
import "./styles.scss";

const ContactsFilters = (props) => {
	const { setContactsFilters } = props;

	const classes = useTableFilterStyles();

	const [fullname, setFullname] = useState(null);
	const [gender, setGender] = useState(null);
	const [nationality, setNationality] = useState(null);
	const [contactCreator, setContactCreator] = useState(null);

	const handleClear = () => {
		setFullname(null);
		setGender(null);
		setNationality(null);
		setContactCreator(null);
		setContactsFilters({
			fullname: null,
			gender: null,
			nationality: null,
			contact_creator: null,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setContactsFilters({
			fullname,
			gender,
			nationality,
			contact_creator: contactCreator,
		});
	};

	useEffect(() => {
		setContactsFilters({
			fullname,
			gender,
			nationality,
			contact_creator: contactCreator,
		});
	}, [fullname, gender, nationality, contactCreator])

	return (
		<div>
			<Paper className={classes.paper}>
				<form onSubmit={handleSubmit}>
					<Grid
						container
						justify="flex-start"
						alignItems="center"
						spacing={3}
					>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<h3 className={classes.title}>{"Filters"}:</h3>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={3}>
							<FormControl className={classes.formControl}>
								<TextField
									value={fullname || ""}
									label={"Fullname"}
									name="fullname"
									placeholder={"Fullname"}
									onChange={(e) =>
										setFullname(e.target.value)
									}
									variant="outlined"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={3}>
							<FormControl className={classes.formControl}>
								<TextField
									value={gender || ""}
									label={"Gender"}
									name="gender"
									placeholder={"Gender"}
									onChange={(e) => setGender(e.target.value)}
									variant="outlined"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={3}>
							<FormControl className={classes.formControl}>
								<TextField
									value={nationality || ""}
									label={"Nationality"}
									name="nationality"
									placeholder={"Nationality"}
									onChange={(e) =>
										setNationality(e.target.value)
									}
									variant="outlined"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={3}>
							<FormControl className={classes.formControl}>
								<TextField
									value={contactCreator || ""}
									label={"Contact creator"}
									name="contactCreator"
									placeholder={"Contact creator"}
									onChange={(e) =>
										setContactCreator(e.target.value)
									}
									variant="outlined"
								/>
							</FormControl>
						</Grid>
						<Grid
							container
							xs={12}
							sm={12}
							md={12}
							lg={12}
							justify="flex-end"
						>
							<Button
								variant="outlined"
								color="default"
								onClick={handleClear}
							>
								<ClearIcon />
								{<span className='clear-button-text'>Clear</span>}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</div>
	);
};

// -------------------------------------------------
const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(ContactsFilters);
