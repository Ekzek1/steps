import React , { useState } from 'react';
import moment from 'moment/moment';

const StepsForm = ({infoSteps}) => {
  const initialStateInput = {
    date: '',
    km: '',
    id: Date.now(),
  }
  const [input, setInput] = useState(initialStateInput);
  const [error, setError] = useState('')

  const inputChange = (e) => {
    const {name, value } = e.target;
    setInput((prevInput) =>({...prevInput, [name]: value}))
  }

  const addInfo = () => {
    if(input.date == '' || input.km == '' || !moment(input.date, 'DD.MM.YYYY',true).isValid() || !/[0-9]/.test(input.km)){
      setError('err')
      return
    }
    setError('')
    infoSteps(input)
    setInput(initialStateInput)
  }

  return (
    <>
      {error 
        ? <span className='steps__error'>Заполните поля верно</span>
        : null
      }
      <form className={'steps__form'} onClick={(e) => e.preventDefault()}>
        <div className="steps__date">
          <label htmlFor="dateSteps" >Дата (ДД.ММ.ГГ)</label>
          <input type="text" id='dateSteps' name='date' className='steps__input' value={input.date} onChange={inputChange}/>
        </div>
        <div className="steps__km">
          <label htmlFor="kmSteps" >Пройдено км</label>
          <input type="text" id='kmSteps' name = 'km' className='steps__input' value={input.km}  onChange={inputChange}/>
        </div>
        <button className='steps__button' onClick={addInfo}>ok</button>
      </form>
    </>
  )
} 

export default StepsForm