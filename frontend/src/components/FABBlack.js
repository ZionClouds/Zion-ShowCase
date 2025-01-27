import React from "react";
import { styled } from "@mui/material/styles"; // Material-UI styled function
import Button from "@mui/material/Button"; // Material-UI Button component
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; // Default icon

// Custom Styled FAB
const FloatingActionButton = styled(Button)(({ background, borderRadius, color }) => ({
  width: "56px",
  height: "56px",
  borderRadius: borderRadius || "20%", // Default to circular shape
  background: background || "linear-gradient(90deg, #205BF3, #89CDA9)", // Default gradient
  color: color || "#fff", // Default icon color
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow for floating effect
  transition: "all 0.3s ease", // Smooth hover transition

  "&:hover": {
    transform: "scale(1.1)", // Scale up slightly on hover
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)", // More pronounced shadow on hover
  },
}));

const CustomFAB = ({ icon, background, borderRadius, color }) => {
  return (
    <FloatingActionButton
      background={background}
      borderRadius={borderRadius}
      color={color}
    >
      {icon || <RocketLaunchIcon style={{ fontSize: "24px" }} />} {/* Default icon */}
    </FloatingActionButton>
  );
};

export default CustomFAB;
