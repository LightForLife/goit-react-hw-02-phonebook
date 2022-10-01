export const ItemContacts = ({ id, name, number }) => {
  return (
    <li id={id}>
      <span>
        {name}: {number}
      </span>
      {/* <span>{number}</span> */}
    </li>
  );
};
