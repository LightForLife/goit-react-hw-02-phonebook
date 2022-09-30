import React, { Component } from 'react';
import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
      { id: 'id-4', name: 'Annie Copeland' },
    ],
    name: '',
    inputValue: '',
  };

  addItemContact = ({ id, name }) => {
    console.log(name);
    const itemContact = {
      id,
      name,
    };

    this.setState(prevState => ({
      contacts: [itemContact, ...prevState.contacts],
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { contacts } = this.state;
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
        <ContactForm addItemContact={this.addItemContact} contacts={contacts} />
        <ListContacts contacts={contacts} />
        <h3>Contacts</h3>
      </div>
    );
  }
}
