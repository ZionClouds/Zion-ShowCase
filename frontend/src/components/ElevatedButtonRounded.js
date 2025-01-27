import React from "react";
import Button from "@mui/material/Button"; // Material UI button
import { styled } from "@mui/material/styles"; // For custom styling
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; // Default icon

const ZionButton = styled(Button)(({ theme, customBackground, customRadius }) => ({
  background: customBackground || "linear-gradient(90deg, #205BF3, #89CDA9)", // Custom or default gradient
  color: "#ffffff",
  fontWeight: 500,
  padding: "12px 24px",
  borderRadius: customRadius || "24px", // Custom or default rounded corners
  textTransform: "none", // Disable uppercase
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    background:
      customBackground || "linear-gradient(90deg, #89CDA9, #205BF3)", // Custom or reversed default gradient
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-2px)",
  },
}));

const ElevatedButton = ({
  text = "Get Started",
  icon, // Allows passing custom Material UI icons
  background,
  shape = "rounded", // 'rounded' or 'rectangle'
}) => {
  // Determine border radius based on shape
  const borderRadius = shape === "rectangle" ? "8px" : "24px";

  return (
    <ZionButton
      endIcon={icon || <RocketLaunchIcon style={{ fontSize: "24px" }} />} // Default or custom icon
      customBackground={background}
      customRadius={borderRadius}
    >
      {text}
    </ZionButton>
  );
};

export default ElevatedButton;
