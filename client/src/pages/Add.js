import React, { Component } from "react";
import API from "../utils/API";

class Add extends Component {
  state = {
    name: "",
    github: "",
    linkedin: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.addNewMember(this.state)
      .then(res => {
        window.alert(`Added new member named ${res.data.name}`);
        this.setState({ name: "", github: "", linkedin: "" });
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="add">
        <h1>Add New Member</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Member Name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="github">GitHub URL</label>
            <input
              type="text"
              className="form-control"
              name="github"
              placeholder="Member GitHub URL"
              onChange={this.handleInputChange}
              value={this.state.github}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn URL</label>
            <input
              type="text"
              className="form-control"
              name="linkedin"
              placeholder="Member LinkedIn URL"
              onChange={this.handleInputChange}
              value={this.state.linkedin}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
