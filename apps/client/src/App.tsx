import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting);
  }, []);

  return (
    <>
      <h1>Nest React Turbo</h1>
      <h2>{greeting}</h2>
    </>
  );
}

export default App;
