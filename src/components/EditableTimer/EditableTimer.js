import React from "react";
import Timer from "../Timer/Timer.js";
import EditForm from "../EditForm/EditForm.js";

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EditForm: "close"
    };
  }

  onEditClick = () => {
    this.setState({
      EditForm: "open"
    });
  };
  //
  onUpdateClick = obj => {
    this.props.handleUpdateClick(obj);
    this.setState({
      EditForm: "close"
    });
  };

  onCancelClick = () => {
    this.setState({
      EditForm: "close"
    });
  };

  render() {
    if (this.state.EditForm === "open") {
      return (
        <div>
          <EditForm
            button="Update"
            title={this.props.title}
            id={this.props.id}
            project={this.props.project}
            handleUpdateClick={this.onUpdateClick}
            handleCancelClick={this.onCancelClick}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
            handleStopClick={this.props.handleStopClick}
            handleStartClick={this.props.handleStartClick}
            handleEditClick={this.onEditClick}
          />
        </div>
      );
    }
  }
}

export default EditableTimer;
