import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const MainPortfolio = styled("div")({
  
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      display: "flex", 
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
      margin: "10% 0",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 912px)": {
    "&": {
      margin: "10% 0",
    },
  },
});

export const DivCarousel = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Cards = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "2% 0 5% 0",
  width: "60%",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      margin: "3%",
      width: "100%",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 912px)": {
    "&": {
      margin: "3%",
      width: "90%",
    },
  },
});

export const TextTitulo = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontWeight: "bold",
  marginLeft: "3%",
  fontSize: "36px",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      display: "flex",
      justifyContent: "center",
      marginLeft: "0",
      fontSize: "24px",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 767px)": {
    "&": {
      fontSize: "28px",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      fontSize: "42px",
    },
  },
});

export const TextCarousel = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  marginTop: "1%",
  fontSize: "16px",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      marginTop: "5%",
      fontSize: "14px",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      marginTop: "5%",
      fontSize: "24px",
    },
  },
});

export const ImgCarousel = styled("img")({
  display: "block",
  borderRadius: "8px",
  border: "3px solid #D9D9D9",
  cursor: "pointer",
  width: "100%",
  "@media only screen and (min-width: 360px) and (max-width: 912px)": {
    "&": {
      width: "100%",
    },
  },
});