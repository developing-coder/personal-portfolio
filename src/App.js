import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} className="App">
        <NavBar />
        <Introduction />
        <Projects />
      </MuiThemeProvider>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static" id="navbar">
        <a href="https://github.com/developing-coder/" id="profile-link">
          <FontAwesomeIcon icon={["fab", "github"]}/>
        </a>
        <a href="https://twitter.com/developingcoder" id="twitter-profile-link">
          <FontAwesomeIcon icon={["fab", "twitter"]}/>
        </a>
        <a href="#welcome-section">Introduction</a>
        <a href="#projects">Projects</a>
      </AppBar>
    )
  }
}

class Introduction extends Component {
  render() {
    return (
      <section id="welcome-section">
        <h1>Welcome</h1>
      </section>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="project-tile">
          <a href="google.com">Example project</a>
        </div>
      </section>
    )
  }
}

export default App;
