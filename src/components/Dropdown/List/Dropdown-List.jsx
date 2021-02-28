import PropTypes from 'prop-types';

import { useState } from 'react';
import DropdownListItem from '../ListItem/Dropdown-ListItem';

export default function DropdownList({ items }) {
  const [selected, setSelected] = useState(items[0].id);

  const onItemSelect = (id) => {
    setSelected(id);
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {items.map(item => (
        <DropdownListItem
          key={item.id} {...item}
          selected={item.id === selected}
          onSelect={onItemSelect}/>
      ))}
    </ul>
  );
}

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired
};

DropdownList.defaultProps = {
  items: []
};
