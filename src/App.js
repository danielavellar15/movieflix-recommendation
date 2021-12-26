//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./config/theme";
import RoutesMain from "./routes";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<RoutesMain />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
