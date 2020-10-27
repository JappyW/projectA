import { makeStyles, createStyles } from '@material-ui/core';

export const useTableStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		paper: {
			width: '100%',
			marginTop: theme.spacing.unit * 3,
			overflowX: 'auto',
		},
		visuallyHidden: {
			border: 0,
			clip: 'rect(0 0 0 0)',
			height: 1,
			margin: -1,
			overflow: 'hidden',
			padding: 0,
			position: 'absolute',
			top: 20,
			width: 1,
		},
		visibilityIcon: {
			fill: '#225f1a',
			color: '#225f1a',
		},
		sendIconColor: {
			fill: '#225f1a',
			color: '#225f1a',
		},
		editIconColor: {
			fill: '#225f1a',
			color: '#225f1a',
		},
		timeReportIconColor: {
			fill: '#225f1a',
			color: '#225f1a',
		},
		deleteIconColor: {
			fill: '#c20e0e',
			color: '#c20e0e',
		},
		activeIconColor: {
			fill: 'green',
			color: 'green',
		},
		notActiveIconColor: {
			fill: 'red',
			color: 'red',
		},
	}),
);
