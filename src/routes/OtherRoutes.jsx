import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Details from "../pages/Details";
import Main from "../pages/Main";

function OtherRoutes() {
	return (
		<Switch>
			<Route exact path="/movie" component={Details} />
			<Route component={Main} />
		</Switch>
	);
}

export default OtherRoutes;
