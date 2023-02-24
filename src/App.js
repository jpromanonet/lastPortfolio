import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { CardMedia, CardHeader } from "@material-ui/core";
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#00A86B",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "2rem"
  },
  grid:{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem", 
  },
})


function App() {  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Hi! I'm Juan and I'm doing a cool or simple project every single day
             <br/>
             <br/>
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            So, as I never get to finish up my portfolio section in my website, I decided to make projects everyday, like #100DaysOfCode, so this functions as a personal portfolio of sorts, in the about section you will be directed to my website, in blog to my shared blog and in the github section to my github profile.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Free Coding Resources"
          />
          <CardMedia
          >
            <img src={require('./assets/recursos.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="http://recursos.jpromano.net/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/freeCodingResources" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Personal Website"
          />
          <CardMedia
          >
            <img src={require('./assets/website.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://jpromano.net/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/webSite2023" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Progress Steps"
          />
          <CardMedia
          >
            <img src={require('./assets/steps.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://ste-progress.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/steProgress" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>
        
        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Ponzitorto"
          />
          <CardMedia
          >
            <img src={require('./assets/ponzitorto.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://ponzitorto.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/ponzitorto_piramid_edition" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Rotation Navbar"
          />
          <CardMedia
          >
            <img src={require('./assets/rotation_nav.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://rotation-nav.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/rotationNav" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Hidden Widget Search"
          />
          <CardMedia
          >
            <img src={require('./assets/hidden_search_widget.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://hidden-search-widget-henna.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/hiddenSearchWidget" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Blurry Loading"
          />
          <CardMedia
          >
            <img src={require('./assets/blurry_loading.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://blurry-loading-eosin.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/blurryLoading" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Scroll Animation"
          />
          <CardMedia
          >
            <img src={require('./assets/scroll_animation.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://scroll-animation-silk.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/scroll_animation" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Split Landing Page"
          />
          <CardMedia
          >
            <img src={require('./assets/split_landing.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://split-landing-page-kappa.vercel.app" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/splitLandingPage" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Form Wave"
          />
          <CardMedia
          >
            <img src={require('./assets/form_wave.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://form-wave-nine.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/form-wave" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>
        
        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Sound Board"
          />
          <CardMedia
          >
            <img src={require('./assets/sound_board.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://sound-board-five-alpha.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/sound_board" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Dad jokes generator"
          />
          <CardMedia
          >
            <img src={require('./assets/dadjokes.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://dadjokes-topaz.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/dadJokes" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Event Key Binder"
          />
          <CardMedia
          >
            <img src={require('./assets/eventKey.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://event-key-codes-fawn.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/eventKeyCodes" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="FAQ Collapse"
          />
          <CardMedia
          >
            <img src={require('./assets/faq.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://faq-collapse-rose.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/faqCollapse" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Random Choice Picker"
          />
          <CardMedia
          >
            <img src={require('./assets/choicepicker.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://random-choice-picker-one.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/randomChoicePicker" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>



        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Animated Navigation"
          />
          <CardMedia
          >
            <img src={require('./assets/animated.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://animated-navigation-henna.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/animatedNavigation" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card> 
        
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Social Media Counter"
          />
          <CardMedia
          >
            <img src={require('./assets/social_media_fans.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://increment-counter-sandy.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/incrementCounter" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Water Drink Reminder"
          />
          <CardMedia
          >
            <img src={require('./assets/water_reminder.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://drink-water-reminder.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/drinkWaterReminder" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Expanding Cards"
          />
          <CardMedia
          >
            <img src={require('./assets/expanding_cards.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://expanding-cards-pi-ivory.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/expandingCards" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>
        
        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Movie App"
          />
          <CardMedia
          >
            <img src={require('./assets/movieapp.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://movie-app-two-sandy.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/movieApp" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Background Slider"
          />
          <CardMedia
          >
            <img src={require('./assets/bgslider.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://backgroundslider.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/backgroundSlider" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Dark theme clock"
          />
          <CardMedia
          >
            <img src={require('./assets/dark_clock.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://dark-mode-clock.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/darkModeClock" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Drag & Drop"
          />
          <CardMedia
          >
            <img src={require('./assets/dragdrop.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://drag-drop-woad.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/drag-drop" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Button Ripple Effect"
          />
          <CardMedia
          >
            <img src={require('./assets/buttonripple.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://button-ripple-effect-one.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/buttonRippleEffect" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Simple Drawing App"
          />
          <CardMedia
          >
            <img src={require('./assets/drawing_app.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://simple-drawing-app.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/simple_drawing_app" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Kinetic Loader"
          />
          <CardMedia
          >
            <img src={require('./assets/kinetic_loader.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://kinectic-loader.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/kinecticLoader" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Content Place Holder"
          />
          <CardMedia
          >
            <img src={require('./assets/place_holder.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://content-place-holder.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/contentPlaceHolder" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>
        
        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Sticky Navbar"
          />
          <CardMedia
          >
            <img src={require('./assets/sticky_navbar.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://sticky-navbar-seven.vercel.app/" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/stickyNavbar" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Vertical Slider"
          />
          <CardMedia
          >
            <img src={require('./assets/vertical_slider.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://vertical-slider-woad.vercel.app" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/verticalSlider" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        <Card style={{margin: "20px", width: "300px"}}>
          <CardHeader
            title="Toast Notification"
          />
          <CardMedia
          >
            <img src={require('./assets/vertical_slider.png')} width="100%" height="200px"/>
          </CardMedia>
          <CardActions style={{justifyContent: "center"}}>
            <a href="https://vertical-slider-woad.vercel.app" target="_blank" >
              <Button>Live</Button>
            </a>
            <a href="https://github.com/jpromanonet/verticalSlider" target="_blank">
              <Button>Github</Button>
            </a>
          </CardActions>
        </Card>

        </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;