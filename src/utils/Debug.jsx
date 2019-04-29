import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Debug.css';

class Debug extends Component {

  render() {

    let { state } = this.props;

    return (
      <div className="Debug">
        <pre>{JSON.stringify(state, null, '  ')}</pre>
      </div>
    );

  }
    
}

export function mapStateToProps(state) {

  return {
    state
  };

}

export default connect(mapStateToProps, null)(Debug);
