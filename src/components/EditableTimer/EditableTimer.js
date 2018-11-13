import React from "react";
import Timer from "../Timer/Timer.js";
import utils from "../../utils/utils.js";

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timer: {
        title: "First Timer",
        project: "TImer App",
        elapsed: 0,
        runningSince: null
      }
    };
  }
  componentDidMount() {
    this.setTimerInterval = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.setTimerInterval);
  }
  onStartClick = () => {
    let now = Date.now();
    let newState = Object.assign({}, this.state.timer, {
      runningSince: now
    });
    this.setState({
      isRunning: true,
      timer: newState
    });
  };

  onStopClick = () => {
    let now = Date.now();
    let newState = Object.assign({}, this.state.timer, {
      elapsed: this.state.timer.elapsed + (now - this.state.timer.runningSince),
      runningSince: null
    });
    this.setState({
      isRunning: false,
      timer: newState
    });
  };

  render() {
    this.elapsedTime = utils.elapsedTimeString(
      this.state.timer.elapsed,
      this.state.timer.runningSince
    );
    return (
      <Timer
        isRunning={this.state.isRunning}
        handleStopClick={this.onStopClick}
        handleStartClick={this.onStartClick}
        elapsedTime={this.elapsedTime}
      />
    );
  }
}

export default EditableTimer;
