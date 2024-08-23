// components/VoteButton.tsx
import Button from "@mui/material/Button";
import constants from "../../config/constants";

interface VoteButtonProps {
	disabled: boolean;
}

const VoteButton: React.FC<VoteButtonProps> = ({ disabled }) => (
	<Button
		variant="contained"
		type="submit"
		sx={{
			height: "36px",
			borderRadius: "8px",
			width: "120px",
			backgroundColor: "#15172A",
			fontSize: "14px",
			fontWeight: 700,
			textTransform: "none",
		}}
		disabled={disabled}
	>
		{constants.SUBMIT_VOTE_BUTTON_TITLE}
	</Button>
);

export default VoteButton;
