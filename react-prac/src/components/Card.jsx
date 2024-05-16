import React from 'react'
import './styles/card.css'

const Card = ({title,text,image}) => {
  return (
    <div className='card'>
        <h2>{title}</h2>
        <img src={image} alt='img' style={{width:'200px',height:'200px'}}/>
        <p>{text}</p>
    </div>
  )
}

export default Card
