import React from "react";
import constants from "../../config/constants";
import Card from "@mui/material/Card";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomTextField from "./CustomTextField";
import VoteButton from "./VoteButton";
import { useSelector } from "react-redux";
import { RootState } from ".././../redux/store";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function VoteForm() {
	const countriesData = useSelector(
		(state: RootState) => state.countriesDataReducer.countriesData
	);
	return (
		<Card
			sx={{
				padding: "16px",
				margin: "1rem",
				borderRadius: "20px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				paddingBottom: "3rem",
				gap: "1rem",
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
				{({ values, handleChange, handleSubmit, setFieldValue }) => (
					<form onSubmit={handleSubmit}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								gap: "1.5rem",
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
								size="small"
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
								size="small"
							/>
							<FormControl
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "10px",
									},
									maxWidth: "14rem",
									width: "100%",
								}}
								size="small"
							>
								<InputLabel id="country-label">Country</InputLabel>
								<Select
									labelId="country-label"
									id="country"
									name="country"
									value={values.country}
									onChange={(event) =>
										setFieldValue("country", event.target.value)
									}
									label="Country"
									required
								>
									{countriesData.map((country) => (
										<MenuItem key={country.id} value={country.id}>
											{country.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>

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
