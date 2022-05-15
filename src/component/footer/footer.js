import React from 'react'
import './footer.css'



function Footer() {
  return (
    <footer className='footer-div'>
        <h4 className='footer-h4'>
            MIMI
        </h4>
        <hr />
        <div className='footer-overall'>
          <div className='footer-subscribe-div'>
            <h2 className='footer-subscribe-h2'>Subscribe to Our Newsletter</h2>
            <input type="text" placeholder='Enter Your Email' className='footer-input'/>
            <button className='footer-btn'>Subscribe</button>
          </div>
          <div className='footer-service-div'>
            <h4 className='footer-h4'>Service</h4>
            <ul className='footer-ul'>
              <li className='footer-li'>Online Order</li>
              <li className='footer-li'>Pre-Reservation</li>
              <li className='footer-li'>24/7 Services</li>
              <li className='footer-li'>Foodie place</li>
              <li className='footer-li'>Super Chefs</li>
            </ul>
          </div>
          <div className='footer-quick-div'>
            <h4 className='footer-h4'>Quick Links</h4>
            <ul className='footer-ul'>
              <li className='footer-li'>Menu</li>
              <li className='footer-li'>Reviews</li>
              <li className='footer-li'>Blogs</li>
              <li className='footer-li'>Reserve Table</li>
              <li className='footer-li'>Order Foods</li>
            </ul>
          </div>
          <div className='footer-about-div'>
            <h4 className='footer-h4'>About</h4>
            <ul className='footer-ul'>
              <li className='footer-li'>Our Story</li>
              <li className='footer-li'>Benefit</li>
              <li className='footer-li'>Career</li>
              <li className='footer-li'>Our Chefs</li>
            </ul>
          </div>
          <div className='footer-help-div'>
            <h4 className='footer-h4'>Help</h4>
            <ul className='footer-ul'>
              <li className='footer-li'>Contact</li>
              <li className='footer-li'>Support</li>
              <li className='footer-li'>FAQ</li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer