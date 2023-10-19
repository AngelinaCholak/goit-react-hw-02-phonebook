import React from 'react';
import { InitialState } from 'components/ InitialState/InitialState';
// import PhoneBook from 'components/PhoneBook/PhoneBook';
const Contacts = ({ contacts, handleInputChange }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={InitialState.filter}
        onChange={handleInputChange}
        
      />
       <p>Find Contacts by name</p>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
