import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#367C2B',
		},
		secondary: {
			light: '#00ff08',
			main: '#ffde00',
			contrastText: '#ffcc00',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});
