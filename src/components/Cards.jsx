import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <div className='card'>
            <div className='character'>
                <h1>{props.Name}</h1>
                <h2>{props.game}</h2>
            </div>
            <div className='image'>
                <img src={props.picture} alt="" />
            </div>
            <div className='description'>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards
