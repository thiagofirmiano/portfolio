import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const MHeader = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

export const Bar = styled("nav")({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  padding: "2% 0",
  "@media only screen and (max-width: 375px)": {
    "&": {
      width: "100%",
      justifyContent: "space-around",
      padding: "5% 0",
    },
    "& a": {
      margin: "0",
      padding: "0",
      fontSize: "12px",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      width: "100%",
      justifyContent: "space-around",
      padding: "3% 0",
    },
    "& a": {
      fontSize: "20px", 
    },
  },
});

export const Link = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-around",
  "&:hover": {
    cursor: "pointer",
    margin: "0",
    color: "#FDCD2F",
    fontWeight: "bold",
    borderBottom: "3px solid #FDCD2F"
  },
});

export const Imglogo = styled("img")({
});