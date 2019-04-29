import React, { Component } from 'react';

import SelectProject from './SelectProject';
import Project from './Project';

class ReactPlayground extends Component {

  constructor(props) {

    super(props);

    let project = localStorage.getItem('react-playground.project');

    if (project === 'null') {
      project = null;
    }

    this.state = { project: project };

  }

  handleOnSelect = (project) => {
    
    if (project === 'null') {
      project = null;
    }

    this.setState({ project: project });
    localStorage.setItem('react-playground.project', project);
      
  }

  render() {

    const { project } = this.state;

    return (
      <React.Fragment>
        <SelectProject project={project} onSelect={this.handleOnSelect} />
        {project === null && <p>Проект не выбран!</p>}
        {project !== null && <Project project={project} />}
      </React.Fragment>
    );

  }

}

export default ReactPlayground;
