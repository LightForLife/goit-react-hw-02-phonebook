import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value, number } = event.currentTarget;
    // const { number, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.value);
    this.setState({ [name]: value });
    this.setState({ [number]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    const findName = this.props.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (findName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.props.addItemContact(contact);

    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label
          style={{
            display: 'block',
          }}
          htmlFor={this.nameInputId}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameInputId}
        />

        <label
          style={{
            display: 'block',
          }}
          htmlFor={this.numberInputId}
        >
          Number
        </label>
        <input
          type="text"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.numberInputId}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
