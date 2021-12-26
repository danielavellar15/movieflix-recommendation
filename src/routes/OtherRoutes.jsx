import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Main from "../pages/Main";

function OtherRoutes() {
	return (
		<Switch>
			{/* <Route exact key={route.to} path={route.to} component={route.page} />; */}

			<Route component={Main} />
		</Switch>
	);
}

export default OtherRoutes;
