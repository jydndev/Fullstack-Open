import Part from './Part';

const Content = ({ part }) => (
  <div>
    <ul>
      {part.map((part) => (
        <li key={part.id}>
          <Part name={part.name} exercises={part.exercises} />
        </li>
      ))}
    </ul>
  </div>
);

export default Content;
