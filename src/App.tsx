import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import { PropsWatch } from './components/Watch'
import ListWatches from './components/ListWatches'
import uniqid from 'uniqid';


function App() {
  const [list, setList] = useState<Array<PropsWatch>>([]);
  const [value, setValue] = useState({
    nameClock: '',
    timeZone: '',
    id: uniqid(),
  })

  const onchangeNameClock = (e:React.InputHTMLAttributes<HTMLInputElement>) => {
    setValue(prevState => {
        return{
          ...prevState,
          nameClock: e.target.value,
        }
    })
  }

  const onchangeTimeZone = (e:React.InputHTMLAttributes<HTMLInputElement>) => {
    setValue(prevState => {
        return{
          ...prevState,
          timeZone: e.target.value,
        }
    })
  }

  const clearForm = () => {
    setValue(prevState => {
      return {
        ...prevState, 
        nameClock: '',
        timeZone: '',
        id: uniqid(), 
      }
    }
      )
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList(prevState => {
      return [
        ...prevState, 
        value,
      ]
    })
    clearForm();
  }

  const handleDeleteItem = (id: string) :void=> {
    console.log(id);
    setList((prevState) => {
      return prevState.filter((list: { id: string }) => list.id !== id)
    })
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmit} value={value} onchangeNameClock={onchangeNameClock} onchangeTimeZone={onchangeTimeZone}/>
      <ListWatches list={list} onClickDelete={handleDeleteItem}/>
    </div>    
  )
}

export default App
