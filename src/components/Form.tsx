import React, { useState, useEffect, FC, useCallback, memo } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './Button';
import { ClearButton } from './ClearButton/ClearButton';
import { MessagesTitle } from './MessagesTitle';
import { MessageList } from './messageList';
import { AUTHOR } from '../constants';

interface FormProps {
  addMessage: (value: string) => void;
  children?: React.ReactNode;
}

interface Message {
  id: string;
  author: string;
  value: string;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [name] = useState('Опубликовать');
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [visible, setVisible] = useState(true);
  const [bntClearName] = useState('Clear button!!');

  const clear = () => {
    setMessages([]);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) {
      alert('brrr.. Пустое нельзя добавлять');
    } else {
      setMessages([
        ...messages,
        {
          id: nanoid(),
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
            id: nanoid(),
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

  return (
    <div className="input_box">
      <form addMessage={addMessage} onSubmit={handleSubmitForm}>
        <MessagesTitle />
        {visible && <MessageList messages={messages} />}
        <input
          className="input_field"
          type="text"
          name={name}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ведите сообщение..."
        />
        <Button name={name} />
      </form>
      <button className="btn_visibility" onClick={() => setVisible(!visible)}>
        {visible ? 'Скрыть сообщения' : 'Показать сообщения'}
      </button>
      <ClearButton name={bntClearName} click={clear} />
    </div>
  );
});
