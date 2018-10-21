import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss';
import { JssProvider } from 'react-jss';

import { theme } from '../../constants/theme';
import NavBar from '../NavBar/NavBar';


const setupJss = () => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss.createStyleSheet(
    {'@global': { a: { color: '#aabbcc' }}}
  ).attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
}

const sheets = setupJss();


class App extends Component {
  render() {
    return (
      <JssProvider registry={sheets}>
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
