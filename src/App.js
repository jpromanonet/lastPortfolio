import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CardMedia, CardHeader } from "@material-ui/core";
import projectsData from "./projects.json";
import "./App.css";

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

const styles = makeStyles({
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
    gridTemplateColumns: "repeat(4, 1fr)", // Updated to four columns
    justifyContent: "center", // Center the grid horizontally
    alignItems: "center",
    justifyItems: "center",
    gap: "1rem", // Adjust the gap between cards
  },
  // Media query for smaller screens (up to 600px width)
  "@media (max-width: 600px)": {
    grid: {
      gridTemplateColumns: "1fr", // Display cards in a single column
    },
  },
  footerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center", // Center the icons horizontally
    alignItems: "center",
    "& svg": {
      fontSize: "2rem",
      margin: "0 10px", // Add some margin between the icons
      cursor: "pointer",
      color: theme.palette.primary.main,
    },
  },
});

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Hi! I'm Juan and I'm doing a cool or simple project every single day
            <br />
            <br />
          </Typography>
          <Typography
            variant="h5"
            className={classes.littleSpace}
            color="primary"
          >
            So, as I never get to finish up my portfolio section in my website,
            I decided to make projects everyday, like #100DaysOfCode, so this
            functions as a personal portfolio of sorts, in the about section you
            will be directed to my website, in blog to my shared blog and in the
            github section to my github profile.
          </Typography>
        </div>
        {/* Project Cards */}
        <div className={`${classes.grid} ${classes.bigSpace}`} style={{ alignItems: "center" }}>
          {projectsData.map((project, index) => (
            <Card key={index} style={{ margin: "20px", width: "300px" }}>
              <CardHeader title={project.title} />
              <CardMedia>
                <img src={require(`${project.imageSrc}`)} width="100%" height="200px" alt={project.title} />
              </CardMedia>
              <CardActions style={{ justifyContent: "center" }}>
                <a href={project.liveUrl} target="_blank">
                  <Button>Live</Button>
                </a>
                <a href={project.githubUrl} target="_blank">
                  <Button>Github</Button>
                </a>
              </CardActions>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className={`${classes.footerContainer} ${classes.bigSpace}`}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
