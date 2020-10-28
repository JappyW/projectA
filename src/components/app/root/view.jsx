import React from "react";
import { RoutesSwitch } from "routes";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ToastProvider } from "react-toast-notifications";

const View = React.memo(() => {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ToastProvider placement="bottom-right">
			<RoutesSwitch />
        </ToastProvider>
		</MuiPickersUtilsProvider>
	);
});

export { View };
