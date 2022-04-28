<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from 'react'

import './ex9.css'
>>>>>>> 7e83c02143414dcdc4d009786a39ce48ede1062b

import "./ex9.css";

const arrImg = [
  "https://kenwheeler.github.io/slick/img/fonz3.png",
  "https://kenwheeler.github.io/slick/img/fonz2.png",
  "https://kenwheeler.github.io/slick/img/fonz1.png",
];

const Ex9 = () => {
  const [index, setIndex] = useState(0);

<<<<<<< HEAD
  const nextImg = () => {
    index === arrImg.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prevImg = () => {
    index === 0 ? setIndex(arrImg.length - 1) : setIndex(index - 1);
  };

=======
  useEffect(() => {
    const nextImg = setInterval(() => {
      next();
    }, 5000)

    return () => clearInterval(nextImg)
  }, [index])

  const next = () => {
    index === arrImg.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const prev = () => {
    index == 0 ? setIndex(arrImg.length - 1) : setIndex(index - 1 )
  }

  const showImg = (index: number) => {
    setIndex(index)
  }
  
>>>>>>> 7e83c02143414dcdc4d009786a39ce48ede1062b
  return (
    <div className="ex9 container">
      <div className="img-box">
        <img src={arrImg[index]} alt="img" />
        <div className="sub-img">
          {arrImg.map((img,index) => (
            <img key={index} src={img} alt="subImg" onClick={() => showImg(index)}/>
          ))}
        </div>
        <i className="fa-solid fa-angle-right right" onClick={prev}></i>
        <i className="fa-solid fa-angle-left left" onClick={next}></i>
      </div>
    </div>
  );
};

export default Ex9;
