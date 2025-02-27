const Persons = ({ filteredPersons, deleteNum }) => {
  return (
    <ul>
      {filteredPersons.map((person) => {
        return (
          <li key={person.name}>
            {person.name} {person.number}
            <button onClick={() => deleteNum(person.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
