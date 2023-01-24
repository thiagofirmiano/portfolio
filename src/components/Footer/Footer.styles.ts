import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const MainFooter = styled("div")({
    // border: "1px solid red",
  });

export const TextFooter = styled(Typography)({
  fontFamily: "Inter, sans-serif", 
    textAlign: "center",
    fontSize: "14px",
    padding: "2% 0",
    "@media only screen and (min-width: 768px) and (max-width: 912px)": {
      "&": {
        padding: "4% 0",
        fontSize: "20px",
      },
    },
  });