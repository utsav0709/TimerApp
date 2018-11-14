import React from "react";
import Timer from "../Timer/Timer.js";
import utils from "../../utils/utils.js";
import EditForm from "../EditForm/EditForm.js";
import NewFormButton from "../NewFormButton/NewFormButton.js";

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EditForm: "close",
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
  onEditClick = () => {
    this.setState({
      EditForm: "open"
    });
  };

  onSubmitClick = obj => {
    let updatedTimer = Object.assign({}, this.state.timer, {
      title: obj.title,
      project: obj.project
    });
    this.setState({
      EditForm: "close",
      timer: updatedTimer
    });
  };

  onCancelClick = () => {
    this.setState({
      EditForm: "close"
    });
  };

  render() {
    this.elapsedTime = utils.elapsedTimeString(
      this.state.timer.elapsed,
      this.state.timer.runningSince
    );
    if (this.state.EditForm === "open") {
      return (
        <div>
          <EditForm
            button="Update"
            title={this.state.timer.title}
            project={this.state.timer.project}
            handleSubmitClick={this.onSubmitClick}
            handleCancelClick={this.onCancelClick}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Timer
            title={this.state.timer.title}
            project={this.state.timer.project}
            isRunning={this.state.isRunning}
            handleStopClick={this.onStopClick}
            handleStartClick={this.onStartClick}
            elapsedTime={this.elapsedTime}
            handleEditClick={this.onEditClick}
          />
          <NewFormButton
            onAddClick={this.onEditClick}
            onCancelClick={this.onCancelClick}
            button="Create"
            EditFormStatus={this.state.EditForm}
          />
        </div>
      );
    }
  }
}

export default EditableTimer;
