import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Introduction />
        <Projects />
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static" id="navbar">
        <a href="github.com" id="profile-link">GitHub</a>
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
