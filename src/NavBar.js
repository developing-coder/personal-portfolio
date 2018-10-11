import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter);


export default class NavBar extends Component {
    render() {
        return (
            <div>
            <AppBar position="static" id="navbar">
                <a href="https://github.com/developing-coder/" id="profile-link">
                <FontAwesomeIcon icon={["fab", "github"]}/>
                </a>
                <a href="https://twitter.com/developingcoder" id="twitter-profile-link">
                <FontAwesomeIcon icon={["fab", "twitter"]}/>
                </a>
                <a href="#welcome-section">Introduction</a>
                <a href="#projects">Projects</a>
            </AppBar>
            </div>
        )
    }
}
