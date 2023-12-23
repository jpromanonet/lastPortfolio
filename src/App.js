import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardHeader, CardMedia } from "@material-ui/core";
import projectsData from "./projects.json";
import { useStyles, theme } from "./styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import "./App.css";

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appliedTheme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main:darkMode ? "#ffffff" : theme.palette.primary.main // Maintain the primary color
      },
      background: {
        default: darkMode ? "#121212" : "#ffffff",
        paper: darkMode ? "#1E1E1E" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : theme.palette.primary.main,
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <br/>
        <div className={classes.navBar}>
          {/* Dark Mode Toggle Button */}
          <Button color="primary" onClick={toggleDarkMode} className={classes.darkModeToggle}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>
        </div>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Hi! I'm Juan and this is my portfolio
            <br />
            <br />
          </Typography>
          <Typography
            variant="h5"
            className={classes.littleSpace}
            color="primary"
          >
            🥷🏽 Ethical Hacker | 👨‍💻 Indie Hacker | 👨‍🏫 Teacher | ✍️ Writer
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