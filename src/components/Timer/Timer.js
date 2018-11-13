import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.elapsedTime}</p>
        <TimerBottomButton
          handleStopClick={this.props.handleStopClick}
          handleStartClick={this.props.handleStartClick}
          isRunning={this.props.isRunning}
        />
      </div>
    );
  }
}

class TimerBottomButton extends React.Component {
  render() {
    if (this.props.isRunning) {
      return <button onClick={this.props.handleStopClick}>Stop</button>;
    } else {
      return <button onClick={this.props.handleStartClick}>Start</button>;
    }
  }
}
export default Timer;
