import React from "react"

export const Input = (props) => {
   return <input className="input_field" type="text" value={props.value} onChange={props.change} placeholder="Ведите сообщение..." />
}