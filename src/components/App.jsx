import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  // const addContact = (name, number) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number
  //   };
  //   setContacts([...contacts, newContact]);
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
    const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2>Contacts</h2>
      <ContactFilter filter={filter} setFilter={setFilter} />
      <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact} />
    </div>
  );
};
