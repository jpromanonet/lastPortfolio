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
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const appliedTheme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#ffffff" : theme.palette.primary.main,
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

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="App">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            👋 Hi! I'm Juan and this is my portfolio
            <br />
            <br />
          </Typography>
          <Typography
            variant="h5"
            className={classes.littleSpace}
            color="primary"
          >
            <div className={classes.navBar}>
              {/* Dark Mode Toggle Button */}
              <Button
                color="primary"
                onClick={toggleDarkMode}
                className={classes.darkModeToggle}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </Button>

              {/* Category Filter Dropdown */}
              <Select
                label="Category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className={classes.categoryFilter}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Web">Web</MenuItem>
                <MenuItem value="Desktop">Desktop</MenuItem>
                <MenuItem value="Hacking">Hacking</MenuItem>
                <MenuItem value="Games">Games</MenuItem>
                <MenuItem value="datascience">Data Science</MenuItem>
                {/* Add more categories as needed */}
              </Select>

              {/* Counter */}
              <Typography variant="subtitle1" color="primary">
                {filteredProjects.length} {selectedCategory === "All" ? "Total projects" : "Projects in " + selectedCategory}
              </Typography>
            </div>
          </Typography>
        </div>

        {/* Project Cards */}
        <div
          className={`${classes.grid} ${classes.bigSpace}`}
          style={{ alignItems: "center" }}
        >
          {filteredProjects.map((project, index) => (
            <Card key={index} style={{ margin: "20px", width: "300px" }}>
              <CardHeader title={project.title} />
              <CardMedia>
                <img
                  src={require(`${project.imageSrc}`)}
                  width="100%"
                  height="200px"
                  alt={project.title}
                />
              </CardMedia>
              <CardActions style={{ justifyContent: "center" }}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>Live</Button>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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