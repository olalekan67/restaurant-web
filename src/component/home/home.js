import React from 'react'
import './home.css'
import Card from '../card/card'
import serve from '../../images/serve2.jpg'
import bowlfood1 from '../../images/bowlfood2.jpg'
import bowlfood from '../../images/bowlfood.jpg'
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
import chef1 from '../../images/chef1.jpg'
import chef3 from '../../images/chef3.png'
import chef4 from '../../images/chef4.jpg'
import chef5 from '../../images/chef5.png'





function Home() {
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

    const chefs = [
        {id:1, image: chef1, name: 'Papsior'},
        {id:2, image: chef3, name: 'Lekzy'},
        {id:3, image: chef4, name: 'Berry'},
        {id:4, image: chef5, name: 'Calvert'},
    ]
  return (
    <div className='over-all-div'>
        <div className='top-container'>
            <div className='top-text-div'>
                <h1 className='top-h1'>
                    We Serve The Test You Love
                </h1>
                <p className='top-p'>This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The terms comes from the french word meaning food
                </p>
                <div className='top-btn-div'>
                    <button className='top-btn'>Explore Food</button>
                    <button className='top-btn'>Search</button>
                </div>
            </div>
            <div className='top-image-div'>
                <img src={bowlfood} alt='bowl' className='top-image'/>
            </div>
        </div>
        <div className='popular container'>
            <h1 className='popular-h1'>Popular Dishes</h1>
            <div>
                <Card foods = {[
        {id: 1, image: jollof, name: 'Jollof Rice', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
        {id: 2, image: burger, name: 'Burger', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
        {id: 3, image: crispy, name: 'Crispy Chicken', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'},
        {id: 4, image: chicken, name: 'Chicken Berbeque', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione ipsa ab molestiae deserunt perspiciatis!'}
    ]} />
            </div>
        </div>
        <div className='service-overall-container'>
            <div className='service-container'>
                <h1 className='service-h1'>We Are More Than Multiple Service</h1>
                <p className='service-p'>
                This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The terms comes from the french word meaning food
                </p>
                <ul className='service-ul'>
                    <li className='service-li'>Online Order</li>
                    <li className='service-li'>Pre-Reservation</li>
                    <li className='service-li'>24/7 Service</li>
                    <li className='service-li'>Super Chefs</li>
                    <li className='service-li'>Clean Kitchen</li>
                    <li className='service-li'>OrganizedFoodie Place</li>
                </ul>
                <button className='service-btn'>About Us</button>
            </div>
            <div>
                <img src={serve} alt='serve' className='serve-img'></img>
            </div>
        </div>
        <div>
            <h1>Our Regular Menu Pack</h1>
            <Card foods={foods} />
        </div>
        <div className='reserve-container'>
            <div className='reserve-div'>
                <h1 className='reserve-h1'>Do You Have Any Dinner Plan Today? Reserve Your Table</h1>
                <p className='reserve-p'>Make online reservations, read restaurant reviews from diners, and earn point towards free meals.OpenTable is a real-time online reservation.</p>
                <button className='reserve-btn'>Make Reservation</button>
            </div>
            <div>
                <img src={bowlfood1} alt='' className='reserve-img'/>
            </div>
        </div>
        <div>
            <h1 className='chef-h1'>Meet Our Chefs</h1>
            <div className='chef-div'>
                {
                    chefs && chefs.map((chef) => 
                        <div className='chef-img-div'>
                            <img src={chef.image} alt="chef" className='chef-img'/>
                            <h3 className='chef-name'>{chef.name}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Home