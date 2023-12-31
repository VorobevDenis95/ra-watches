import { useEffect, useState } from 'react';

interface PropsWatch {
    nameClock: string;
    timeZone: string;
    id: string;
    onClickDelete: (id:string) => void,
}

const Watch = ({nameClock, timeZone, id, onClickDelete}: PropsWatch) => {

  const [time, setTime] = useState(
    {
      hour: '',
      minutes: '',
      seconds: ''
    }
  );

  const tick = () => {
    console.log(1);
    const date = new Date();
    let hr = date.getUTCHours() + Number(timeZone);
    while (hr > 23) hr = hr-24;
    const min = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');
    setTime(prevState => {
      return {
        ...prevState,
        hour: hr,
        minutes: min,
        seconds: sec,
      }
    })
  }

  useEffect(tick, [])

  useEffect(() => {
    const interval = window.setInterval(tick, 1000);

    return(() => {
      clearInterval(interval);
    }) 
  })


    return (
      <div className="watch">
        <div className="title">{nameClock}</div>
        <span className="time">{`${time.hour}:${time.minutes}:${time.seconds}`}</span>
        <button type='button' onClick={() => onClickDelete(id)}>х</button>
      </div>
    )
}

export default Watch;
export type { PropsWatch };