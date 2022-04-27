import React, { useState } from 'react'

import './ex9.css'


const arrImg = [
  'https://kenwheeler.github.io/slick/img/fonz3.png',
  'https://kenwheeler.github.io/slick/img/fonz2.png',
  'https://kenwheeler.github.io/slick/img/fonz1.png',
  ]
  
const Ex9 = () => {
  const [index, setIndex] = useState(0);

  const nextImg = () => {
    index === arrImg.length - 1 ? setIndex(0) : setIndex(index + 1 )
  }

  const prevImg = () => {
    index == 0 ? setIndex(arrImg.length - 1) : setIndex(index - 1 )
  }

  
  return (
    <div className='ex9 container'>
      <div className="img-box">
        <img src={arrImg[index]} alt="img" />
        <i className="fa-solid fa-angle-right right" onClick={prevImg}></i>
        <i className="fa-solid fa-angle-left left" onClick={nextImg}></i>
      </div>
    </div>
  )
}

export default Ex9