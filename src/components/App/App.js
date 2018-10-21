import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { JssProvider } from 'react-jss';

import { globalStyles } from '../../constants/globalStyles';
import { theme } from '../../constants/theme';
import NavBar from '../NavBar/NavBar';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import { loadIconsToLibrary } from '../../constants/icons';

loadIconsToLibrary();

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


export default App;
