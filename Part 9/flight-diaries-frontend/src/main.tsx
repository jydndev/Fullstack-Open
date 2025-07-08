import { createRoot } from 'react-dom/client';

interface WelcomeProps {
  name: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Welcome = (props: WelcomeProps) => {
  return <h2>welcome {props.name}</h2>;
};

createRoot(document.getElementById('root')!).render(<Welcome name="Sarah" />);
