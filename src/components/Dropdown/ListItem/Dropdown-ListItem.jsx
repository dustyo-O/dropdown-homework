import PropTypes from 'prop-types';

export default function DropdownListItem({ id, text, selected, onSelect }) {
  const onClick = () => {
    onSelect(id);
  }

  return (
    <li className={selected ? 'active' : ''}>
      <a href="#" onClick={onClick}>{text}</a>
    </li>
  );
}

DropdownListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};
