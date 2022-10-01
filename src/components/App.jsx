import React, { Component } from 'react';
import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';

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

  addItemContact = ({ id, name, number }) => {
    const itemContact = {
      id,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [itemContact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const constNormalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );

    return filterContacts;
  };

  onDeleteContact = id => {
    const { contacts } = this.state;

    const filterContacts = contacts.filter(contact => contact.id !== id);
    console.log(...filterContacts);

    this.setState(() => ({
      contacts: [...filterContacts],
    }));
    this.setState(prevState => console.log(prevState));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm addItemContact={this.addItemContact} contacts={contacts} />
        <ListContacts
          contacts={visibleContacts}
          onDelete={this.onDeleteContact}
        />
        <h3>Contacts</h3>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
      </div>
    );
  }
}
