import React, { Component } from 'react';

import PROJECTS from '../config';

import './SelectProject.css'

class SelectProject extends Component {

  handleChange = (event) => {
    const { onSelect } = this.props;
    onSelect(event.target.value);
  }

  render() {

    const { project } = this.props;

    return (
      <div className="SelectProject">
        <select value={project} onChange={this.handleChange}>
          <option value="null">Выбрать проект</option>;
          {Object.keys(PROJECTS).map((key) => {
            return <option key={key} value={key}>{key}</option>;
          })}
        </select>
      </div>
    );

  }

}

export default SelectProject;
