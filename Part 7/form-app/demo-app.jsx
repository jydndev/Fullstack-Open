import useField from './useField';

const App = () => {
  const name = useField();
  const birthdate = useField();
  const height = useField();

  return (
    <div>
      <form>
        name:
        <input type={name.type} value={name.value} onChange={name.onChange} />
        <br />
        birthdate:
        <input
          type={birthdate.type}
          value={birthdate.value}
          onChange={birthdate.onChange}
        />
        <br />
        height:
        <input
          type={height.type}
          value={height.value}
          onChange={height.onChange}
        />
      </form>
      <div>
        {name} {birthdate} {height}
      </div>
    </div>
  );
};
