import { nanoid } from 'nanoid';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';

export const ListContacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ItemContacts
          key={nanoid()}
          id={nanoid()}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
