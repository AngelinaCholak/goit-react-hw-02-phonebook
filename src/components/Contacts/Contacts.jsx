import React, { Component } from 'react';

export default class Contacts extends Component {
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

  handleDeleteContact = (id) => {
    this.props.handleDeleteContact(id);
  };

  handleFilterChange = (event) => {
    this.props.handleFilterChange(event.target.value);
  };

  render() {
    const { filter } = this.props;

    const filteredContacts = this.props.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <p>Find Contacts by name</p>
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => this.handleDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
