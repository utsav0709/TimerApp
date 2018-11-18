import React from "react";
import EditableTimerList from "../EditableTimerList/EditableTimerList.js";
import NewFormButton from "../NewFormButton/NewFormButton.js";
import uuid from "../../utils/uuid.js";

class TimerDashBoard extends React.Component {
  state = {
    timers: [
      {
        title: "First Timer",
        project: "Timer App",
        elapsed: 0,
        runningSince: null,
        id: uuid.v4()
      },
      {
        title: "Second Timer",
        project: "Timer App",
        elapsed: 12344,
        runningSince: null,
        id: uuid.v4()
      },
      {
        title: "Third Timer",
        project: "Timer App",
        elapsed: 42344,
        runningSince: null,
        id: uuid.v4()
      }
    ]
  };

  // All the App Functionality

  onStartClick = timerId => {
    let now = Date.now();

    const updatedTimers = this.state.timers.map(timer => {
      if (timerId === timer.id) {
        return Object.assign({}, timer, {
          runningSince: now
        });
      } else {
        return timer;
      }
    });

    this.setState({ timers: updatedTimers });
  };

  onStopClick = timerId => {
    let now = Date.now();

    const updatedTimers = this.state.timers.map(timer => {
      if (timer.id === timerId) {
        return Object.assign({}, timer, {
          elapsed: timer.elapsed + (now - timer.runningSince),
          runningSince: null
        });
      } else {
        return timer;
      }
    });
    this.setState({
      timers: updatedTimers
    });
  };

  onUpdateClick = obj => {
    let updatedTimers = this.state.timers.map(timer => {
      if (timer.id === obj.id) {
        return Object.assign({}, timer, {
          title: obj.title,
          project: obj.project
        });
      } else {
        return timer;
      }
    });

    this.setState({
      timers: updatedTimers
    });
  };

  onCreateClick = obj => {
    const newObj = Object.assign({}, obj, {
      runningSince: null,
      elapsed: 0
    });
    let updatedTimers = [...this.state.timers, newObj];

    this.setState({
      timers: updatedTimers
    });
  };

  // onCancelClick = () => {
  //   this.setState({
  //     EditForm: "close"
  //   });
  // };

  // Functionality Ends Here

  render() {
    return (
      <div>
        <EditableTimerList
          timers={this.state.timers}
          handleStartClick={this.onStartClick}
          handleStopClick={this.onStopClick}
          handleUpdateClick={this.onUpdateClick}
        />
        <NewFormButton handleCreateClick={this.onCreateClick} />
      </div>
    );
  }
}

export default TimerDashBoard;
