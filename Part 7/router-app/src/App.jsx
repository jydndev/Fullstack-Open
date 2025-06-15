import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Link>home</Link>
        <Link>notes</Link>
        <Link>users</Link>
      </div>
    </Router>
  );
};

export default App;
