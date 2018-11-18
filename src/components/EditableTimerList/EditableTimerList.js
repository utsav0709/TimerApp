import React from "react";
import EditableTimer from "../EditableTimer/EditableTimer.js";
class EditableTimerList extends React.Component {
  render() {
    const editableTimerComponents = this.props.timers.map(timer => {
      return (
        <EditableTimer
          id={timer.id}
          key={"projectId - " + timer.id}
          title={timer.title}
          project={timer.project}
          runningSince={timer.runningSince}
          elapsed={timer.elapsed}
          handleStartClick={this.props.handleStartClick}
          handleStopClick={this.props.handleStopClick}
          handleUpdateClick={this.props.handleUpdateClick}
        />
      );
    });
    return <div>{editableTimerComponents}</div>;
  }
}

export default EditableTimerList;
