import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Main = styled("div")({
  "@media only screen and (min-width: 360px) and (max-width: 912px)": {
    "&": {
      width: "100%",
      justifyContent: "center", 
    },
  },
});
export const DivCards = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  margin: "7% 3%",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      margin: "5% 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 767px)": {
    "&": {
      margin: "1%",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      margin: "1%",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  },
});
export const CardHabilidade = styled("div")({
  width: "20%",
  height: "200px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #D9D9D9",
  alignItems: "center",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      width: "90%",
      marginBottom: "3%",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 767px)": {
    "&": {
      width: "45%",
      marginBottom: "3%",
    },
  },
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      width: "45%",
      marginBottom: "2%",
      height: "300px",
    },
  },
});
export const Text = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontWeight: "bold",
  marginLeft: "3%",
  fontSize: "36px",
  alignItems: "center",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      display: "flex",
      justifyContent: "center",
      marginTop: "10%",
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

export const SubTituloCard = styled(Typography)({
  fontWeight: "bold",
  margin: "5% 0 5% 0",
  fontSize: "20px",
  color: "#8b0000",
  "@media only screen and (min-width: 768px) and (max-width: 912px)": {
    "&": {
      fontSize: "24px",
    },
  },
});
