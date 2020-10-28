import { createStyles, makeStyles } from '@material-ui/core';

export const useTableFilterStyles = makeStyles(() =>
	createStyles({
		paper: {
			padding: '2rem',
		},
		title: {
			fontWeight: 'normal',
			margin: 0,
		},
		formControl: {
			width: '100%',
		},
		buttonClear: {
			marginRight: '15px',
		},
	}),
);
