import Box from "@mui/material/Box";

export const AppUrlPreview = (props) => (
  <Box
    sx={{
      flexGrow: "1",
      mt: "24px",
      p: "16px",
      border: "1px dashed grey"
    }}
  >
    <label style={{ fontSize: "18px", textDecoration: "underline" }}>
      {props.url}
    </label>
  </Box>
);
