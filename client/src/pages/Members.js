import React, { Component } from "react";
import API from "../utils/API";
class Members extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    API.getAllMembers()
      .then(res => this.setState({ members: res.data }))
      .catch(console.log);
  }

  render() {
    return (
      <div className="members">
        <h1>Members</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Github</th>
              <th>LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {this.state.members.map(member => (
              <tr key={member._id}>
                <td>{member.name}</td>
                <td>
                  <a href={member.github}>{member.github}</a>
                </td>
                <td>
                  <a href={member.linkedin}>{member.linkedin}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Members;
