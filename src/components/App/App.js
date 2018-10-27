import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { JssProvider } from 'react-jss';

import { globalStyles } from '../../constants/globalStyles';
import { theme } from '../../constants/theme';
import { styles } from './appStyles';
import NavBar from '../NavBar/NavBar';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import { loadIconsToLibrary } from '../../constants/icons';

loadIconsToLibrary();

class App extends Component {

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(event) {
    console.log(event.deltaY);
  }

  render() {
    const { classes } = this.props

    return (
      <JssProvider registry={globalStyles}>
        <div className="App">
          <MuiThemeProvider theme={theme} >
            <NavBar />
            <Introduction />
            <Projects class={classes.hidden}/>
          </MuiThemeProvider>
        </div>
      </JssProvider>
    );
  }
}


export default withStyles(styles)(App);
