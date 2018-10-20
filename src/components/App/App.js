import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss';
import { JssProvider } from 'react-jss';

import NavBar from '../NavBar/NavBar';
import { themeColors } from '../../constants/colors';


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


const theme = createMuiTheme({
  palette: {
    primary: themeColors.primary,
    secondary: {
      light: themeColors.secondary,
      main: themeColors.secondary,
      dark: themeColors.secondary,
      contrastText: themeColors.secondary
    },
    error: {
      light: themeColors.error,
      main: themeColors.error,
      dark: themeColors.error,
      contrastText: themeColors.error
    }
  },
  shadows: ['none']
});


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
