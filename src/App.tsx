import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {

  const list = [];

  const [value, SetValue] = useState({
    nameClock: '',
    timeZone: '',
  })

  const onchangeNameClock = (e:React.InputHTMLAttributes<HTMLInputElement>) => {
    SetValue(prevState => {
        return{
          ...prevState,
          nameClock: e.target.value,
        }
    })
  }

  const onchangeTimeZone = (e:React.InputHTMLAttributes<HTMLInputElement>) => {
    SetValue(prevState => {
        return{
          ...prevState,
          timeZone: e.target.value,
        }
    })
  }

  const clearForm = () => {
    SetValue(prevState => {
      return {
        ...prevState, 
        nameClock: '',
        timeZone: '',
      }
    }
      )
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    list.push(value);
    console.log(value);
    clearForm();
  }


  return (
    <Form onSubmit={onSubmit} value={value} onchangeNameClock={onchangeNameClock} onchangeTimeZone={onchangeTimeZone}/>
  )
}

export default App
