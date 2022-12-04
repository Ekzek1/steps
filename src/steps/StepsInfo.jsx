import React from 'react'
import StepsItem from './StepsItem'

const StepsInfo = ({items, remove}) => {
  return (
    <div className='steps__body'>
        <div className="steps__info">
          <p>Дата (ДД.ММ.ГГ)</p>
          <p>Пройдено км</p>
          <p>Действия</p>
        </div>
        <div className="steps__items">
          {items.map((item) => 
            <StepsItem item={item} key={item.id} remove = {remove}/>
          )}
        </div>
    </div>
  )
}

export default StepsInfo