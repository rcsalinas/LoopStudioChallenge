import React from "react";
import constants from "../../config/constants";
import Card from "@mui/material/Card";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomTextField from "./CustomTextField";
import VoteButton from "./VoteButton";

export default function VoteForm() {
	return (
		<Card
			sx={{
				padding: "16px",
				margin: "1rem",
				borderRadius: "20px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				paddingBottom: "3rem",
				gap: "0.5rem",
			}}
		>
			<Typography
				variant="h6"
				gutterBottom
				sx={{
					fontWeight: "bold",
					fontSize: "14px",
				}}
			>
				{constants.FORM_TITLE}
			</Typography>
			<Formik
				initialValues={{ name: "", email: "", country: "" }}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								gap: "10px",
								maxHeight: "38px",
							}}
						>
							<CustomTextField
								id="name"
								label="Name"
								type="text"
								name="name"
								onChange={handleChange}
								value={values.name}
								placeholder="Name"
								required
							/>
							<CustomTextField
								id="email"
								label="Email"
								type="email"
								name="email"
								onChange={handleChange}
								value={values.email}
								placeholder="Email"
								required
							/>
							<CustomTextField
								id="country"
								label="Country"
								type="text"
								name="country"
								onChange={handleChange}
								value={values.country}
								placeholder="Country"
								required
							/>

							<VoteButton
								disabled={!values.name || !values.email || !values.country}
							/>
						</Box>
					</form>
				)}
			</Formik>
		</Card>
	);
}
