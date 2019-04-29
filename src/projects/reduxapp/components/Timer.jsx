import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clock extends Component {

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {

    this.props.dispatch({ type: "TICK" });

  }

  render() {

    const { timer } = this.props;

    return (
      <div className="Timer">
      <h2>Timer: {timer}</h2>
      </div>
    );

  }

}

export function mapStateToProps(state) {

  return {
    'timer': state.main.timer
  };

}

export function mapDispatchToProps(dispatch) {

  return {
    dispatch
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
