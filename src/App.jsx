import React from 'react';
import './App.scss';
import { Form } from './components/Form';
export const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
      </div>
    </>
  );
};

export default App;
