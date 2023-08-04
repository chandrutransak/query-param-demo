import Box from "@mui/material/Box";
import Iframe from "react-iframe";

export const AppIframe = (props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexGrow: "1",
      mt: "12px",
      p: "24px",
      border: "1px dashed grey"
    }}
  >
    <Iframe
      url={props.url}
      width="500px"
      height="600px"
      id=""
      className=""
      display="block"
      position="relative"
    />
  </Box>
);
