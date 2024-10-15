// StatCard.js
import { Box, LinearProgress, Typography } from "@mui/material";

const StatCard = ({ label, value, total, color }) => {
  const percentage = (value / total) * 100;

  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 1,
        textAlign: "center",
        width: "100%",
        marginBottom: "16px",
      }}
    >
      <Typography variant="h6" color="textPrimary">
        {label}
      </Typography>
      <Typography variant="h4" color={color} sx={{ fontWeight: "bold" }}>
        {value}/{total}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: "10px",
          borderRadius: "5px",
          backgroundColor: "#ddd",
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
};

export default StatCard;
