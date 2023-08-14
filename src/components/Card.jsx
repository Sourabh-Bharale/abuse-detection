import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className={`box ${props.color}`}>
              <h1>{props.model}</h1>
              <div className="cardTitle">
                <h2 className={props.textColor}>{Math.floor(props.prediction*100)} <span> % </span></h2>
                </div>
              </div>
  )
}

export default Card