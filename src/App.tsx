import React, {FC, useState, useCallback} from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Components/Form';
import './App.scss';
import { AUTHOR } from './constants';

interface Message {
  id: string;
  author: string;
  value: string;
}

export const App: FC = () => {
const [messages, setMessages] = useState<Message[]>([]);
const addMessage = useCallback((value: string) => {
  setMessages((prevMessage) => [
    ...prevMessage,
    {
      id: nanoid(),
      author: AUTHOR.USER,
      value,
    },
  ]);
}, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Form addMessage={addMessage} />
        </header>
      </div>
    </>
  );
};

export default App;
