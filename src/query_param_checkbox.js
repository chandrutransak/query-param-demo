import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const AppIframe = (props) => (
  <Box sx={{ flexGrow: "1", mt: "16px" }}>
    {props.queryParamMap.map((query, i) => (
      <Button
        variant="outlined"
        sx={{ mt: "8px", mr: "8px", textTransform: "none" }}
      >
        <label key={i}>
          <input
            type="checkbox"
            name="lang"
            value={query.value}
            onChange={handleChange}
          />
          {"  "}
          {query.label}
        </label>
      </Button>
    ))}
  </Box>
);
