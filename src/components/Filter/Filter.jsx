import React, { Component } from 'react';

export default class Filter extends Component {
  handleFilterChange = (event) => {
    this.props.handleFilterChange(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <p>Find Contacts by name</p>
      </div>
    );
  }
}
