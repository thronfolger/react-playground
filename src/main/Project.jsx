import React, { Component } from 'react';

import PROJECTS from '../config';

class Project extends Component {

  render() {

    const { project } = this.props;
    const ComponentClass = PROJECTS[project];

    if (ComponentClass === undefined) {
      return <Project404 />;
    }

    return (
      <div className={`Project__${project}`}>
        <ComponentClass />
      </div>
    );

  }

}

const Project404 = () => <p>Проект не найден!</p>

export default Project;
