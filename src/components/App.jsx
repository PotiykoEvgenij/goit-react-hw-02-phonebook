import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactList/ContactList';
import { ContactList } from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (name) => {
    const newContact = {
      id: nanoid(),
      name: name
    };
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};
