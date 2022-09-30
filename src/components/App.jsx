import React, { Component } from 'react';
import { ContactForm } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    inputValue: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <h3>Phonebook</h3>
        <ContactForm onSubmitHandler={this.formSubmitHandler} />

        <h3>Contacts</h3>
      </div>
    );
  }
}
