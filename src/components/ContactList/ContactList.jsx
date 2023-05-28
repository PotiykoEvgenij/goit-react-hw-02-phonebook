import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteContact }) => {
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    
  return (
    <ul>
      {filteredContacts.map((contact) => (
          <li key={contact.id}>
          <span>{contact.name}: {contact.number}</span>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};