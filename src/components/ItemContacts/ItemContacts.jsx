import { TiUserDelete } from 'react-icons/ti';

export const ItemContacts = ({ id, name, number, onDelete }) => {
  return (
    <li id={id}>
      <span>
        {name}: {number}
        <button onClick={() => onDelete(id)}>
          <TiUserDelete size={16} />
        </button>
      </span>
    </li>
  );
};
