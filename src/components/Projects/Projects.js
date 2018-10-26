import React, { Component } from 'react';


export default class Projects extends Component {
    render() {
      return (
        <section id="projects" className={this.props.class}>
          <div className="project-tile">
            <a href="google.com">Example project</a>
          </div>
        </section>
      )
    }
  }
  