import React from "react";
import EditForm from "../EditForm/EditForm.js";

class NewFormButton extends React.Component {
  state = {
    newFormStatus: "close"
  };
  onAddClick = () => {
    this.setState({
      newFormStatus: "open"
    });
  };
  onCancelClick = () => {
    this.setState({
      newFormStatus: "close"
    });
  };
  onSubmitClick = obj => {
    this.props.handleCreateClick(obj);
    this.setState({
      newFormStatus: "close"
    });
  };
  render() {
    if (this.state.newFormStatus === "close") {
      return (
        <div>
          <button onClick={this.onAddClick}>Add New</button>
        </div>
      );
    } else {
      return (
        <EditForm
          button="Create"
          handleUpdateClick={this.onSubmitClick}
          handleCancelClick={this.onCancelClick}
        />
      );
    }
  }
}

export default NewFormButton;
