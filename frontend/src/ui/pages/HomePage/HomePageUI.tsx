import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar";
import VoteForm from "../../components/VoteForm";

export default function HomePageUI() {
	return (
		<>
			<AppBar />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<VoteForm />
			</Box>
		</>
	);
}
