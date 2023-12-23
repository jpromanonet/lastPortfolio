import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardHeader, CardMedia } from "@material-ui/core";
import projectsData from "./projects.json";
import { useStyles, theme } from "./styles";
import "./App.css";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
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
          👨‍💼 Engineering Manager | 👨‍💻 Full Stack Developer | 👨‍🏫 Teacher | ✍️ Writer
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
