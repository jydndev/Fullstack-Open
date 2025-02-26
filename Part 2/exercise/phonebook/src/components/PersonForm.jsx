const PersonForm = ({
  handleNewName,
  handleNewNum,
  handleSubmit,
  newName,
  newNum,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNum} onChange={handleNewNum} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
