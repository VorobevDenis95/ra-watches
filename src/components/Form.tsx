import { FormEvent, useState } from "react";

interface PropsForm {
  value: {nameClock: string, timeZone: string},
  onchangeNameClock: React.ChangeEventHandler<HTMLInputElement>,
  onchangeTimeZone: React.ChangeEventHandler<HTMLInputElement>,
  onSubmit: React.FormEvent<HTMLFormElement>;
}

const Form = ({value, onchangeNameClock, onchangeTimeZone, onSubmit}: PropsForm) => {

  return (
    <form onSubmit={(e) => onSubmit(e)}> 
      <input type="text" value={value.nameClock} onChange={(e) => onchangeNameClock(e)} required/>
      <input type="number" value={value.timeZone} onChange={(e) => onchangeTimeZone(e)} required />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default Form;