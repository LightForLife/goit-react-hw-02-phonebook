import { nanoid } from 'nanoid';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';

export const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ItemContacts
          key={nanoid()}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
