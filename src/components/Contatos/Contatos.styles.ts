import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Main = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 0 5% 0",
});

export const MContatos = styled("div")({
  width: "40%",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      width: "100%",
      margin: "5% 0",
    },
  },
  "@media only screen and (min-width: 540px)": {
    "&": {
      width: "90%",
      margin: "3% 0",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 2048px)": {
    "&": {
      width: "70%",
      margin: "3% 0",
    },
  },
});

export const Titulo = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "36px",
  marginBottom: "1%",
});

export const Img = styled("img")({
  cursor: "pointer",
  "@media only screen and (min-width: 360px) and (max-width: 414px)": {
    "&": {
      width: "100%",
      maxWidth: "50px",
    },
  },
  "@media only screen and (min-width: 540px)": {
    "&": {
      width: "90%",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      width: "100%",
    },
  },
});