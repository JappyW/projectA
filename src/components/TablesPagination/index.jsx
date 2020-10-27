import React from 'react';
import Pagination from 'react-js-pagination';

import { Select, MenuItem, InputLabel, Icon } from '@material-ui/core';
import { useTableStyles } from 'components/app/styles';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './styles.scss';

const TablesPagination = (props) => {
	const { tablePerPage, tableCurrentPage, changeRowsPerPage, totalPage, changePage } = props;
	const classes = useTableStyles();

	return (
		<div className="pagination-wrapper">
			<div className="rows-per-page-wrapp">
				<InputLabel className="pagination-label" style={{ marginRight: '10px' }}>
					{'Rows per page'}:
				</InputLabel>
				<Select style={{ marginRight: '10px' }} value={tablePerPage} onChange={changeRowsPerPage}>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>50</MenuItem>
					<MenuItem value={4}>100</MenuItem>
				</Select>
			</div>

			<Pagination
				activePage={tableCurrentPage}
				itemsCountPerPage={tablePerPage}
				totalItemsCount={totalPage}
				pageRangeDisplayed={5}
				onChange={changePage}
				innerClass="table-pagination"
				firstPageText={<SkipPreviousIcon/>}
				lastPageText={<SkipNextIcon/>}
				prevPageText={<NavigateBeforeIcon/>}
				nextPageText={<NavigateNextIcon/>}
			/>
		</div>
	);
};

export default TablesPagination;
