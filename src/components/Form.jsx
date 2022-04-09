import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { ClearButton } from './ClearButton';
import { Messages } from './Messages';

export const Form = () => {
  const [name] = useState('Опубликовать')
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([''])
  const [visible, setVisible] = useState(true)
  const [bntClearName] = useState('Clear button!!')

  const clear = () => {
    setMessages([])
  }

  const handleClick = () => {
    if (!value) {
      alert("brrr.. Пустое нельзя добавлять");
    } else {
      setMessages([...messages, value])
      setValue('')
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return <>
    <Messages name={name} value={value} />
    {visible && <ul className='messages_list'>
      {messages.map(message =>
        <li>{message}</li>
      )}
    </ul>}
    <div className="input_box" >
      <Input change={handleChange} value={value} />
      <Button name={name} click={handleClick} />
      <button className='btn_visibility' onClick={() => setVisible(!visible)}>
        {visible ? 'Скрыть сообщения' : 'Показать сообщения'}
      </button>
    </div>
    <ClearButton name={bntClearName} click={clear} />
  </>
}