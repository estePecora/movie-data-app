import React, { useEffect } from 'react';
import './App.css';

function App() {


  useEffect(() => {
    console.log('hello world')
  }, [])

  
  return (
    <div className="App">
      <h1>MOVIE DATA</h1>
    </div>
  );
}

export default App;
