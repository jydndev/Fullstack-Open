import useField from './useField';

const App = () => {
  const name = useField('text');
  const birthdate = useField('date');
  const height = useField('number');

  return (
    <div>
      <form>
        name:
        <input {...name} />
        <br />
        birthdate:
        <input {...birthdate} />
        <br />
        height:
        <input {...height} />
      </form>
      <div>
        {name.value} {birthdate.value} {height.value}
      </div>
    </div>
  );
};
