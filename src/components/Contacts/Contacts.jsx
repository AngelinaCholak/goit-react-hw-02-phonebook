import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    const { contacts, filter, handleDeleteContact } = this.props;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
