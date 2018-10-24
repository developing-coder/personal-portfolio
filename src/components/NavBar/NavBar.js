import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styles } from './navBarStyles'
import { CodeBenderLogo } from '../../svg/code-bender-logo';


class NavBar extends Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static" id="navbar">
                    <Toolbar>
                        <div className={classes.logo}>
                            <CodeBenderLogo />
                        </div>
                        <div className={classes.siteTitle}>
                            <h1>CodeBender</h1>
                        </div>
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
