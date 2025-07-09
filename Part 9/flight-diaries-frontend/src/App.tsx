import Course from './Course';
import Form from './Form';

interface WelcomeProps {
  name: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Welcome = (props: WelcomeProps) => {
  return <h2>welcome {props.name}</h2>;
};

function App() {
  return (
    <>
      <Welcome name="Sarah" />
      <Course />
      <Form />
    </>
  );
}

export default App;
