import React , { useState, useMemo } from 'react'
import StepsForm from './StepsForm';
import StepsInfo from './StepsInfo';
import './steps.css'

const Steps = () => {

  const [info, setInfo ] = useState([])

  const  infoSteps  = (input) =>  {
    setInfo((info) => ([...info, input]))
  }

  useMemo(() => {
    if(info){
      let sorted = info.sort((a,b) => a.date.slice(0, 2) - b.date.slice(0, 2) );
      sorted = info.sort((a,b) => a.date.slice(3, 5) - b.date.slice(3, 5));
      sorted = info.sort((a,b) => a.date.slice(6, 10) - b.date.slice(6, 10))
      setInfo(sorted)
    }
  },[info])

  const onRemove = (itemId) => {
    setInfo((info) => (info.filter(item => item.id !== itemId)));
  }

  return (
    <div className='steps'>
      <StepsForm infoSteps = {infoSteps} />
      <StepsInfo items = {info} remove = {onRemove}/>
    </div>
  )
}

export default Steps