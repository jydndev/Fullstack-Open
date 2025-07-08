import { createRoot } from 'react-dom/client';
import type { JSX } from 'react';

interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps): JSX.Element => {
  return <h2>welcome {props.name}</h2>;
};

createRoot(document.getElementById('root')!).render(<Welcome name="Sarah" />);
