import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import NavBar from './NavBar';


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
      <div className="App">
        <MuiThemeProvider theme={theme} >
          <NavBar />
          <Introduction />
          <Projects />
        </MuiThemeProvider>
      </div>
    );
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
