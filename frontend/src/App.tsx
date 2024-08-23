import React from "react";
import HomePage from "./ui/pages/HomePage/HomePage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
