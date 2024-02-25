import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNumberChange = e => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact, contacts } = this.props;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
    } else {
      addContact({
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      });
    }

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label>
          <p className={css.name}>Name</p>
          <input
            className={css.nameInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \'-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </label>

        <label>
          <p className={css.number}>Number</p>
          <input
            className={css.numberInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button className={css.addButton} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
