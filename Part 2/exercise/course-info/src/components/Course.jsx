import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
  const totalCalc = () => {
    return course.parts.reduce((sum, part) => sum + part.exercises, 0);
  };

  return (
    <div>
      <Header name={course.name} />
      <Content part={course.parts} />
      <Total total={totalCalc()} />
    </div>
  );
};

export default Course;
