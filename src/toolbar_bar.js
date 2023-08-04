import Box from "@mui/material/Box";

export const AppToolbar = () => (
  <Box
    sx={{
      backgroundColor: "primary.dark",
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7]
      },
      p: "24px"
    }}
  >
    <label style={{ fontSize: "24px", color: "white" }}>
      Query Params Integration
    </label>
  </Box>
);
