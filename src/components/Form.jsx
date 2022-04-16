import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ClearButton } from './ClearButton';
import { MessagesTitle } from './MessagesTitle';
import { MessageList } from './messageList';
import { AUTHOR } from '../constants';

export const Form = () => {
  const [name] = useState('Опубликовать');
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(true);
  const [bntClearName] = useState('Clear button!!');

  const clear = () => {
    setMessages([]);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!value) {
      alert('brrr.. Пустое нельзя добавлять');
    } else {
      setMessages([
        ...messages,
        {
          author: 'user',
          value: value,
        },
      ]);
      setValue('');
    }
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: 'im vasia',
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = (value) => {
    setMessages([
      ...messages,
      {
        author: AUTHOR.USER,
        value,
      },
    ]);
  };

  return (
    <div className="input_box">
      <form addMessage={addMessage} onSubmit={handleSubmitForm}>
        <MessagesTitle data-testid="test_messages_title" />
        {visible && <MessageList messages={messages} />}
        <input
          className="input_field"
          type="text"
          name={name}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ведите сообщение..."
        />
        <Button />
      </form>
      <button
        id="visib"
        className="btn_visibility"
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Скрыть сообщения' : 'Показать сообщения'}
      </button>
      <ClearButton name={bntClearName} click={clear} />
    </div>
  );
};
