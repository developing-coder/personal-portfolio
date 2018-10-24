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
                        <div id="navigation" className={classes.navigation}>
                            <a href="#welcome-section" className={classes.navLink}>Introduction</a>
                            <a href="#projects" className={classes.navLink}>Projects</a>
                        </div>
                        <a href="https://github.com/developing-coder/" id="profile-link" className={classes.navBarIcon}>
                            <FontAwesomeIcon 
                                icon={["fab", "github-square"]} 
                                className={"fa-2x"} />
                        </a>
                        <a href="https://twitter.com/developingcoder" id="twitter-profile-link" className={classes.navBarIcon}>
                            <FontAwesomeIcon 
                                icon={["fab", "twitter-square"]} 
                                className={"fa-2x"} />
                        </a>
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
