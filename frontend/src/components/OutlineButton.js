import React from "react";
import { styled } from "@mui/material/styles"; // Using Material-UI's styled function
import Button from "@mui/material/Button"; // Material-UI Button component
import ArrowForward from '@mui/icons-material/ArrowForward';

// Custom Styled Outline Button
const OutlineButton = styled(Button)(({ theme }) => ({
  border: "2px solid", // Outline border
  borderImage: "linear-gradient(90deg, #205BF3, #89CDA9) 1", // Gradient outline
  borderRadius: "24px",
  color: "white", //"linear-gradient(90deg, #205BF3, #89CDA9)", // Text gradient color
  fontWeight: 500,
  padding: "12px 24px",
  background: "transparent", // Transparent background
  textTransform: "none", // Disable uppercase text
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px", // Space between text and icon
  transition: "all 0.3s ease", // Smooth hover transition

  "&:hover": {
    background: "rgba(32, 91, 243, 0.1)", // Light background on hover
  },
}));

const CustomOutlineButton = ({ text = 'Get Started' }) => (
    <OutlineButton endIcon={<ArrowForward style={{ fontSize: "20px" }} />}>
      {text}
    </OutlineButton>
  );

export default CustomOutlineButton;
