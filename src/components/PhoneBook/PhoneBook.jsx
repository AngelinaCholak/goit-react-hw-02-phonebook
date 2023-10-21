import React, { Component } from 'react';

export default class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
