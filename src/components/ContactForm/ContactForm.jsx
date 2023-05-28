import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactForm = ({ contacts, setContacts }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
      if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number');
      return;
      }
      
      const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};