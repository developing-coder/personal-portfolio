import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { CodeBenderLogo } from './svg/code-bender-logo';


library.add(faGithub, faTwitter);


const styles = {
    root: {
        flexGrow: 1
    },
    test: {
        background: 'pink'
    }
  };


class NavBar extends Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static" id="navbar">
                    <Toolbar className={classes.test}>
                        <CodeBenderLogo />
                        <a href="https://github.com/developing-coder/" id="profile-link">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                        <a href="https://twitter.com/developingcoder" id="twitter-profile-link">
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </a>
                        <a href="#welcome-section">Introduction</a>
                        <a href="#projects">Projects</a>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar);
