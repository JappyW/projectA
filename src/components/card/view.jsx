import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	Chip,
	Divider,
	Grid,
} from "@material-ui/core";
import "./styles.scss";
import { Email, Phone, LocationCity } from "@material-ui/icons";

export const CardItem = (props) => {
	const { contact } = props;
	const now = new Date();
	const yearsOld = now.getFullYear() - new Date(contact.birth).getFullYear();

	return (
		<Card className="card-item">
			<CardMedia
				component="img"
				className="media"
				image={contact.photo}
			/>
			<CardContent>
				<Grid container direction="column" justify="center">
					<Grid className="card-header" container>
						<span>{contact.fullname}</span>
						<span className="years-old-text">
							({yearsOld} years)
						</span>
					</Grid>
					<Divider variant="middle" className="divider" />
					<span gutterBottom>{}</span>

					<Grid container>
						<Email className="text-icon icon" />
						<a
							className="card-email"
							href={`mailto:${contact.email}`}
						>
							{contact.email}
						</a>
					</Grid>
					<Grid container>
						<Phone className="text-icon icon" />
						<span className="card-phone">{contact.phone}</span>
					</Grid>

					<Grid
						container
						justify="start"
						alignItems="center"
						className="card-location"
					>
						<LocationCity className="text-icon icon" />
						<p className="card-country">/{contact.country}/</p>
						<div className="card-address">
							{contact.home_number +
								", " +
								contact.street +
								", " +
								contact.city +
								", " +
								contact.region +
								", " +
								contact.index}
						</div>
					</Grid>
					<Divider variant="middle" className="divider" />

					<Grid container justify="start" alignItems="center">
						<Chip label={contact.nationality} variant="outlined" />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
