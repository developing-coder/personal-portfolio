import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { JssProvider } from 'react-jss';

import { globalStyles } from '../../constants/globalStyles';
import { theme } from '../../constants/theme';
import NavBar from '../NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <JssProvider registry={globalStyles}>
        <div className="App">
          <MuiThemeProvider theme={theme} >
            <NavBar />
            <Introduction />
            <Projects />
          </MuiThemeProvider>
        </div>
      </JssProvider>
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
