import "./style.scss";
import React, { useMemo } from "react";
import { APP_NAME } from "constants/env";
import { Header } from "components";
import { Grid } from "@material-ui/core";

const View = React.memo((props) => {
	const { children } = props;

	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<div>
			<Header />
			<Grid
				container
				direction="column"
				justify="space-between"
				alignItems="center"
				className="base-grid"
			>
				<Grid item style={{ width: "100%" }}>
					{children}
				</Grid>
				<Grid item>
					{currentYear} &copy; {APP_NAME}
				</Grid>
			</Grid>
		</div>
	);
});

export { View };
