import React from 'react'

const StepsItem = ({item, remove}) => {
  return (
    <div className="steps__item">
      <p>{item.date}</p>
      <p>{item.km}</p>
      <div className="steps__actions">
        <button className="steps__edit"></button>
        <button className="steps__remove" onClick={() => remove(item.id)}></button>
      </div>
    </div>
  )
}

export default StepsItem