import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { TableCell } from '@material-ui/core';
import { useTableStyles } from 'components/app/styles';

const ContactsTableHead = (props) => {
	const { order, orderBy, onRequestSort, columns } = props;
	const classes = useTableStyles();

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{columns.map((headCell) => {
					return (
						<TableCell
							key={headCell.id}
							align={headCell.numeric ? 'right' : 'left'}
							sortDirection={orderBy === headCell.id ? order : false}
						>
							<div
								className={
									headCell.align ? headCell.align : 'align-center'
								}
							>
								{headCell.id === 'fullname' ||
								headCell.id === 'gender' ||
								headCell.id === 'nationality' ||
								headCell.id === 'creator' ? (
									<TableSortLabel
										active={orderBy === headCell.id}
										direction={orderBy === headCell.id ? order : 'asc'}
										onClick={createSortHandler(headCell.id)}
									>
										{headCell.label}
										{orderBy === headCell.id ? (
											<span className={classes.visuallyHidden}>
												{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
											</span>
										) : null}
									</TableSortLabel>
								) : (
									`${headCell.label}`
								)}
							</div>
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
};

export default ContactsTableHead;
