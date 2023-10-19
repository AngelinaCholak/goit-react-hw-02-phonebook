import React, { Component } from 'react'
import { InitialState } from 'components/ InitialState/InitialState';

export default class PhoneBook extends Component {

      state = {
    ...InitialState, 
  };


    handlesubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const number = event.target.elements.number.value;
        const contactData = {
            name,
            number: Number.parseFloat(number),
        }
        this.props.handleAddContact(contactData);
    }

    handleInputChange = (event) => {
          const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }
  render() {
      return (
          <form onSubmit={this.handlesubmit}>
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
    };
};
