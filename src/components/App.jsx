import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import { InitialState } from './ InitialState/InitialState';


export default class App extends Component {
 
  state = {
  ...InitialState
  }
  handleAddContact = (contactData) => {
    console.log('name', contactData);
    const hasDuplicates = this.state.contacts.some((contact) => contact.name === contactData.name);
    if (hasDuplicates) {
      alert(`Contact with the name ${contactData.name} already exists.`);
      return;
    }
     const finalContact = {
    ...contactData,
    id: nanoid()
  }
    this.setState({
      contacts: [...this.state.contacts, finalContact],
    })
  }

  // hendDeleteContact = (contactData) => {

  // }
  
 
  
  render() {
    return (
      <div>
         <h1>Phonebook</h1>
        <PhoneBook
          handleAddContact={this.handleAddContact}
        />
         <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
    )
  }
}
export { App }; 

