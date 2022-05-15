import React from 'react'
import './card.css'

function Card({foods}) {
  return (
    <div className='scroll'>
      {
        foods&&foods.map((food) => 
          <div className='over-all-div1'>
              <div className='card-container'>
                  <div className='card-img-div'>
                      <img className='card-img' src= {food.image} alt={food.name}/>
                  </div>
                  <h3>{food.name}</h3>
                  <p>{food.description}</p>
                  <div className='card-footer'>
                      <h3> $8 </h3>
                      <button className='card-footer-btn'>Add To Cart</button>
                  </div>
              </div>
          </div>
        )
        
      }
    </div>
  )
}

export default Card