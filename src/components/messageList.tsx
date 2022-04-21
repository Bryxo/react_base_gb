import React, { FC } from 'react';
import { nanoid } from 'nanoid';

interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <ul className="messages_list">
    {messages.map((message) => (
      <li key={message.id}>
        {message.author}: {message.value}
      </li>
    ))}
  </ul>
);
