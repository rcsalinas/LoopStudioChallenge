import React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
	id: string;
	label: string;
	type: string;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	placeholder: string;
	size?: "small" | "medium";
	required?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
	id,
	label,
	type,
	name,
	onChange,
	value,
	placeholder,
	size = "small",
	required = false,
}) => {
	return (
		<TextField
			id={id}
			label={label}
			variant="outlined"
			type={type}
			name={name}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			size={size}
			sx={{
				"& .MuiOutlinedInput-root": {
					borderRadius: "10px",
				},
			}}
			required={required}
		/>
	);
};

export default CustomTextField;
