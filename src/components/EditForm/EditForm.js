import React from "react";
import uuid from "../../utils/uuid.js";

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || "",
      project: this.props.project || ""
    };
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleProjectChange = e => {
    this.setState({
      project: e.target.value
    });
  };

  localSubmitHandle = e => {
    e.preventDefault();
    this.props.handleUpdateClick({
      title: this.state.title,
      project: this.state.project,
      id: this.props.id || uuid.v4()
    });
  };

  localCancelHandle = e => {
    e.preventDefault();
    this.props.handleCancelClick();
  };

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <br />
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <br />
          <label>Project</label>
          <br />
          <input
            name="title"
            value={this.state.project}
            onChange={this.handleProjectChange}
          />
          <br />
          <button onClick={this.localSubmitHandle}>{this.props.button}</button>
          <br />
          <button onClick={this.localCancelHandle}>Cancel</button>
        </form>
      </div>
    );
  }
}
export default EditForm;
