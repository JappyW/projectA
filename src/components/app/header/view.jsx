import "./style.scss";
import React from "react";
import { Logo } from "../logo";
import { NavBar } from "../navbar";
import { Grid, Paper } from "@material-ui/core";

const View = () => {
	return (
		<Paper style={{ margin: 0, padding: "1rem" }}>
			<div className={"header"}>
				<Grid container align="center" justify="space-between">
					<Logo />
					<Grid className={"_flex-grow"}>
						<Grid container align="center">
							<Grid className={"_flex-grow"}>
								<NavBar />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Paper>
	);
};

export { View };
