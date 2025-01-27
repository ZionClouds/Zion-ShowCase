import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Text Field
const CustomTextField = styled(TextField)(({ theme, customBackground }) => ({
  "& .MuiOutlinedInput-root": {
    background: customBackground || "#ffffff", // Default or custom background
    borderRadius: "8px", // Rounded corners
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
    "& fieldset": {
      borderColor: "#ccc", // Border color
    },
    "&:hover fieldset": {
      borderColor: "#205BF3", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#205BF3", // Focused border color
      boxShadow: "0px 0px 8px rgba(32, 91, 243, 0.5)", // Focused shadow
    },
  },
}));

const InputComponent = ({
  label = "Enter Text", // Label for the text field
  placeholder = "Type something...", // Placeholder text
  type = "text", // Default input type
  multiline = false, // Whether it's a textbox (multiline)
  rows = 4, // Number of rows for textbox
  background, // Custom background color
}) => {
  return (
    <CustomTextField
      label={label}
      placeholder={placeholder}
      type={multiline ? undefined : type} // Disable type for multiline
      multiline={multiline}
      rows={multiline ? rows : undefined} // Applies rows only if multiline
      customBackground={background}
      fullWidth
      variant="outlined"
    />
  );
};

export default InputComponent;
