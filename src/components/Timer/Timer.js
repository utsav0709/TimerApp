import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div>
        <p>Title</p>
        <p>{this.props.title}</p>
        <p>Project</p>
        <p>{this.props.project}</p>
        <p>{this.props.elapsedTime}</p>
        <button onClick={this.props.handleEditClick}>EditForm</button>
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
