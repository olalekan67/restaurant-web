import React from 'react'
import './Product.css'
import jollof from '../../images/jollofrice.jpg'
import burger from '../../images/burger.jpg'
import crispy from '../../images/crispychicken.jfif'
import chicken from '../../images/grilledchicken.jpg'
import friedRice from '../../images/friedrice.jpg'
import fish from '../../images/fishbarbeque.jpg'
import pizza from '../../images/pizza.jfif'
import potage from '../../images/potato_pottage.jpg'
import Yam from '../../images/yamandegg.jpg'
import shawarma from '../../images/shawarma.jfif'
import semo from '../../images/semo.png'
import poundedyam from '../../images/poundedyam.jfif'

function Product() {
  const foods = [
    {id: 1, image: jollof, name: 'Jollof Rice', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 2, image: burger, name: 'Burger', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 3, image: crispy, name: 'Crispy Chicken', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 4, image: chicken, name: 'Chicken Berbeque', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 5, image: friedRice, name: 'Fried Rice', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 6, image: fish, name: 'Fish Berbeque', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 7, image: pizza, name: 'Pizza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 8, image: potage, name: 'Potato Pottage', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 9, image: Yam, name: 'Yam and Egg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 10, image: shawarma, name: 'Shawarma', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 11, image: semo, name: 'Semo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
    {id: 12, image: poundedyam, name: 'Pounded Yam', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'}
]
  return (
    <div className='scroll1'>
        {
        foods&&foods.map((food) => 
          <div className='over-all-div2'>
              <div className='card-container2'>
                  <div className='card-img-div2'>
                      <img className='card-img2' src= {food.image} alt={food.name}/>
                  </div>
                  <h3>{food.name}</h3>
                  <p>{food.description}</p>
                  <div className='card-footer2'>
                      <h3> $8 </h3>
                      <button className='card-footer-btn2'>Add To Cart</button>
                  </div>
              </div>
          </div>
        )
      }
    </div>
  )
}

export default Product