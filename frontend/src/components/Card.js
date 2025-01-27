import React from "react";
import { Card, CardContent, Typography, Box, Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

// Styled Card component with gradient background
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "16px",
  textAlign: "left",
}));

const GradientCardComponent = ({
  title = "Project Title",
  description = "This is a customizable card with a title, description, and tags.",
  tags = ["Tag1", "Tag2"],
  demoLink = "#",
  codeLink = "#",
}) => {
  return (
    <StyledCard style={{display: "flex"}}>
      <CardContent className="project-card">
        {/* Title */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
          <LinkIcon style={{ color: "#5F5F5F" }} />
        </Box>

        {/* Description */}
        <Typography variant="body1" color="textSecondary" mb={2}>
          {description}
        </Typography>

        {/* Tags */}
        <Box display="flex" gap={1} mb={2}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              style={{
                backgroundColor: "#E3F2FD",
                color: "#1E88E5",
                fontWeight: "500",
              }}
              size="medium"
            />
          ))}
        </Box>

        {/* Links */}
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button
            startIcon={<LinkIcon />}
            href={demoLink}
            target="_blank"
            style={{ textTransform: "none", color: "#1E88E5", fontWeight: "bold" , fontSize: "20px" }}
          >
            View Demo
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            href={codeLink}
            target="_blank"
            style={{ textTransform: "none", color: "#1E88E5", fontWeight: "bold" , fontSize: "20px"}}
          >
            View Code
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default GradientCardComponent;
