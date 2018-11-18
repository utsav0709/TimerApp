import React from "react";
import utils from "../../utils/utils.js";

class Timer extends React.Component {
  componentDidMount() {
    this.setTimerInterval = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.setTimerInterval);
  }

  onStartClick = () => {
    this.props.handleStartClick(this.props.id);
  };

  onStopClick = () => {
    this.props.handleStopClick(this.props.id);
  };

  render() {
    this.elapsedTime = utils.elapsedTimeString(
      this.props.elapsed,
      this.props.runningSince
    );
    return (
      <div>
        <p>Title</p>
        <p>{this.props.title}</p>
        <p>Project</p>
        <p>{this.props.project}</p>
        <p>{this.elapsedTime}</p>
        <button onClick={this.props.handleEditClick}>EditForm</button>
        <TimerBottomButton
          id={this.props.id}
          handleStopClick={this.onStopClick}
          handleStartClick={this.onStartClick}
          runningSince={this.props.runningSince}
        />
      </div>
    );
  }
}

class TimerBottomButton extends React.Component {
  render() {
    if (this.props.runningSince) {
      return <button onClick={this.props.handleStopClick}>Stop</button>;
    } else {
      return <button onClick={this.props.handleStartClick}>Start</button>;
    }
  }
}
export default Timer;
