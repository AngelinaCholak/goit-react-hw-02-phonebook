import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (contactData) => {
    const hasDuplicates = this.state.contacts.some((contact) => contact.name === contactData.name);
    if (hasDuplicates) {
      alert(`Contact with the name ${contactData.name} already exists.`);
      return;
    }

    const finalContact = {
      ...contactData,
      id: nanoid(),
    };

    this.setState({
      contacts: [...this.state.contacts, finalContact],
    });
  };

  handleDeleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: updatedContacts,
    });
  };

  handleFilterChange = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBook handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <Contacts
          contacts={contacts}
          filter={filter}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
