import React, { Component } from 'react';

export default class PhoneBook extends Component {
  state = {
    name: '',
    number: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      alert('Please enter both name and number.');
      return;
    }

    const contactData = {
      name,
      number,
    };
    this.props.handleAddContact(contactData);

    this.setState({ name: '', number: '' }); 
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
