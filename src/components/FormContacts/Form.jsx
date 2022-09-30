import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = { id: nanoid(), name: this.state.name };
    this.props.addItemContact(contact);
    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({ name: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label
          style={{
            display: 'block',
          }}
          htmlFor=""
        >
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
