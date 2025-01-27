import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Card component with gradient background
const GradientCard = styled(Card)(({ theme, customBackground, customRadius }) => ({
  background: customBackground || "linear-gradient(90deg, #205BF3, #89CDA9)", // Custom or default gradient
  color: "#ffffff",
  borderRadius: customRadius || "16px", // Custom or default rounded corners
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  overflow: "hidden", // Ensures content doesn't overflow the card
  padding: "16px",
  textAlign: "center",
}));

const GradientCardComponent = ({
  title = "Gradient Card Title",
  description = "This is a customizable gradient card. Add your content here.",
  background,
  shape = "rounded", // 'rounded' or 'rectangle'
}) => {
  // Determine border radius based on shape
  const borderRadius = shape === "rectangle" ? "8px" : "16px";

  return (
    <GradientCard customBackground={background} customRadius={borderRadius}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </GradientCard>
  );
};

export default GradientCardComponent;
