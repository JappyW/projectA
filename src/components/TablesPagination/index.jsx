import React from "react";
import Pagination from "react-js-pagination";

import { Select, MenuItem, InputLabel, Grid } from "@material-ui/core";
import { useTableStyles } from "components/app/styles";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "./styles.scss";

const TablesPagination = (props) => {
	const {
		tablePerPage,
		tableCurrentPage,
		changeRowsPerPage,
		totalPage,
		changePage,
	} = props;
	const classes = useTableStyles();

	return (
		<Grid container justify="end">
			<div className="pagination-wrapper">
				<div className="rows-per-page-wrapp">
					<InputLabel
						className="pagination-label"
						style={{ marginRight: "10px" }}
					>
						{"Rows per page"}:
					</InputLabel>
					<Select
						style={{ marginRight: "10px" }}
						value={tablePerPage}
						onChange={changeRowsPerPage}
					>
						<MenuItem value={10}>{10}</MenuItem>
						<MenuItem value={25}>{25}</MenuItem>
						<MenuItem value={50}>{50}</MenuItem>
						<MenuItem value={100}>{100}</MenuItem>
					</Select>
				</div>

				<Pagination
					activePage={tableCurrentPage}
					itemsCountPerPage={tablePerPage}
					totalItemsCount={totalPage}
					pageRangeDisplayed={5}
					onChange={changePage}
					innerClass="table-pagination"
					firstPageText={<SkipPreviousIcon />}
					lastPageText={<SkipNextIcon />}
					prevPageText={<NavigateBeforeIcon />}
					nextPageText={<NavigateNextIcon />}
				/>
			</div>
		</Grid>
	);
};

export default TablesPagination;
