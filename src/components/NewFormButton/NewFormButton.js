import React from "react";
import EditForm from "../EditForm/EditForm.js";

class NewFormButton extends React.Component {
  localClickHandle = () => {};
  render() {
    if (this.props.EditForm === "open") {
      return <EditForm />;
    } else {
      return (
        <div>
          <button onClick={this.props.onAddClick}>Add New Timer</button>
        </div>
      );
    }
  }
}

export default NewFormButton;
