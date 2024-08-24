import React from "react";
import { Alert, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearBanner } from "../../redux/slices/bannerSlice";
import { RootState } from "../../redux/store";

export default function MessageBanner() {
	const dispatch = useDispatch();
	const { isError, message } = useSelector((state: RootState) => state.banner);
	const handleClose = () => {
		dispatch(clearBanner());
	};
	return (
		<Alert
			variant="outlined"
			onClose={handleClose}
			severity={isError ? "error" : "success"}
			sx={{
				bgcolor: "background.paper",
				width: "100%",
				borderRadius: "20px",
				maxHeight: "56px",
				borderColor: "white",
			}}
		>
			<Typography
				variant="subtitle2"
				sx={{
					fontWeight: "bold",
					color: "black",
				}}
			>
				{message}
			</Typography>
		</Alert>
	);
}
