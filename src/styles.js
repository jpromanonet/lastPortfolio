import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00A86B",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const useStyles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    gap: "1rem",
  },
  // Media query for smaller screens (up to 600px width)
  "@media (max-width: 600px)": {
    grid: {
      gridTemplateColumns: "1fr",
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px", // Add some gap between the icons
    "& svg": {
      fontSize: "2rem",
      cursor: "pointer",
      color: theme.palette.primary.main,
    },
  },
  // Add this new class for the footer container to be centered
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { theme, useStyles };
