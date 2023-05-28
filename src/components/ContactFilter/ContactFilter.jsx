import React from 'react';
import PropTypes from 'prop-types';

export const ContactFilter = ({ filter, setFilter }) => {
    const handleFilterChange = (e) => {
    setFilter(e.target.value);
    };
    
  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};