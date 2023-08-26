import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      skill: "",
    };
  }

  firstNameHolder(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  lastNameHolder = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  skillHandeler(e) {
    this.setState({
      skill: e.target.value,
    });
  }

  submitHandeler(e) {
    e.preventDefault();
    alert(
      `Name: ${this.state.firstName} ${this.state.lastName} Skill: ${this.state.skill}`
    );
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitHandeler(e)}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={this.state.firstName}
            onChange={(e) => this.firstNameHolder(e)}
          />
        </div>

        <div>
          <label htmlFor="last-name">First Name:</label>
          <input
            type="text"
            id="last-name"
            value={this.state.lastName}
            onChange={this.lastNameHolder}
          />
        </div>

        <div>
          <select
            value={this.state.skill}
            onChange={(e) => this.skillHandeler(e)}
          >
            <option value="">Select Yout Skill</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
