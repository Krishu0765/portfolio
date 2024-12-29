import React from "react";
import { Switch, Route } from "react-router-dom";
import Windows from "../containers/windows.container";

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Windows} />
			<Route path="/home" exact component={Windows} />
			<Route path="/windows" exact component={Windows} />
		</Switch>
	);
}

export default Routes;
