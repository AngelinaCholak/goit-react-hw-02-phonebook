import React, { Component } from 'react';
import css from './contacts.module.css'

export default class Contacts extends Component {
  render() {
    const { contacts, filter, handleDeleteContact } = this.props;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul className={css.contactsList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
              className={css.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
