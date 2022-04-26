import React from 'react'
import './ex3.css'

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

const Ex3 = () => {
  return (
    <div className='ex3 container'>
        <ul className='ex3-list'>
            {animals.map((item,index) => (
                <li key={index} className={item}><i className={`fa-solid fa-${item}`}></i>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Ex3