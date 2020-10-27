import React from 'react';
import { RoutesSwitch } from 'routes';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'materialTheme';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const View = React.memo(() => {
	return (
		<ThemeProvider theme={theme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<RoutesSwitch />
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	);
});

export { View };