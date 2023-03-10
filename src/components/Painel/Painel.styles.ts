import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Main = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row",
  alignItems: "center",
  margin: "5% 0",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      minWidth: "100vw",
      padding: "10% 0",
      margin: "0",
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 801px)": {
    "&": {
      margin: "10% 0",
      flexDirection: "column-reverse",
    },
  },
  "@media only screen and (min-width: 802px) and (max-width: 912px)": {
    "&": {
      padding: "7% 0",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
});

export const DivText = styled("div")({
  width: "40%",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      width: "90%",
      margin: "0",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 800px)": {
    "&": {
      width: "90%",
      margin: "0",
    },
  },
  "@media only screen and (min-width: 801px) and (max-width: 1024px)": {
    "&": {
      width: "60%",
      margin: "0 0 0 2%",
    },
  },
  "@media only screen and (min-width: 1025px) and (max-width: 2048px)": {
    "&": {
      width: "60%",
      margin: "0 0 0 7%",
    },
  },
});

export const Text = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontSize: "42px",
  fontWeight: "bold",
  color: "#F0E68C",
  "@media only screen and (min-width: 360px) and (max-width: 539px)": {
    "&": {
      width: "100%",
      fontSize: "26px",
    },
  },
  "@media only screen and (min-width: 540px) and (max-width: 800px)": {
    "&": {
      fontSize: "32px",
    },
  },
  "@media only screen and (min-width: 100px) and (max-width: 100px)": {
    "&": {
      fontSize: "32px",
    },
  },
  "@media only screen and (min-width: 1025px) and (max-width: 2048px)": {
    "&": {
      fontSize: "42px",
    },
  },
});
export const ImgBanner = styled("img")({
  margin: "0 4% 0 2%",
  "@media only screen and (min-width: 360px) and (max-width: 400px)": {
    "& ": {
      margin: "0",
      width: "90%",
    },
  },
  "@media only screen and (min-width: 401px) and (max-width: 600px)": {
    "&": {
      margin: "0",
      width: "70%",
    },
  },
  "@media only screen and (min-width: 601px) and (max-width: 799px)": {
    "&": {
      margin: "0",
      width: "50%",
    },
  },
  "@media only screen and (min-width: 800px) and (max-width: 1024px)": {
    "&": {
      margin: "0 2% 0 0",
      width: "45%",
    },
  },
  "@media only screen and (min-width: 1025px) and (max-width: 2048px)": {
    "&": {
      margin: "0 7% 0 0",
      width: "45%",
    },
  },
});