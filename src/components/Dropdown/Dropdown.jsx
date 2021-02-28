import PropTypes from 'prop-types';

import { useState } from 'react';
import DropdownList from './List/Dropdown-List';

export default function Dropdown({ menu }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  }

  return (
    <div data-id="wrapper" className={`dropdown-wrapper${open ? ' open' : ''}`}>
      <button data-id="toggle" className="btn" onClick={toggleOpen}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList items={menu}/>
    </div>
  );
}

Dropdown.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired
};

Dropdown.defaultProps = {
  menu: []
};
