export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" value={value} onChange={onChangeFilter} />
    </div>
  );
};
