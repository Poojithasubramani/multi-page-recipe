import React from 'react'
import '../../styles/Footer.css'
import { Link } from 'react-router';


export default function Footer() {
    return (
      <footer className='footer-section'>
        <div className="container-fluid px-4">
          <div className="row gy-4 footer-content">
            
            {/* Logo and Social Media */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo">
                <h2>
                  <i className='bi bi-egg-fried'></i>
                  Tasty <span>Bites</span>
                </h2>
                <p>Good Food &nbsp;Good Mood</p>
              </div>
             
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><Link to ={'/'} className='link-tag'><i className='bi bi-house-fill'></i>Home</Link></li>
                <li><Link to ={'/recipes'} className='link-tag'><i className='bi bi-cup-hot-fill'></i>Recipes</Link></li>
                <li><Link to ={'/favorites'} className='link-tag'><i className='bi bi-heart-fill'></i>Favourites</Link></li>
              </ul>
            </div>  

            {/* Our Services */}
            <div className="col-lg-2  col-md-6">
              <h5>Our Servicces</h5>
              <ul className='footer-links'>
                <li><i className='bi bi-check-lg'></i>Delicious Recipes</li>
                <li><i className='bi bi-check-lg'></i>Healthy Eating Tips</li>
                <li><i className='bi bi-check-lg'></i>Cooking Guides</li>
                <li><i className='bi bi-check-lg'></i>Food Blog</li>
              </ul>
            </div>

            {/* Contact Us */}

            <div className="col-lg-2 col-md-6">
              <h5>Contact Us</h5>
              <ul className="footer-links contact-links">
                <li><i className='bi bi-telephone-fill'></i>+91 9867560098</li>
                <li><i className='bi  bi-envelope'></i>hello@tastybites.com</li>
                <li><i  className='bi bi-geo-alt-fill'></i>Chennai,Tamil Nadu</li>
              </ul>
            </div>
             <div className="col-lg-3 col-md-6">
               <h5 className='me-2'>Follow us on Social Media </h5>
              <div className="social-icons">
                <a href='#'><i className='bi  bi-facebook'></i></a>
                <a href='#'><i className='bi bi-youtube'></i></a>
                <a href='#'><i className='bi bi-instagram'></i></a>
                <a href='#'><i className='bi bi-linkedin'></i></a>
              </div>
            </div>

            {/* Copyrights */}
            <div className="footer-bottom">
              <p>
                  © 2026 TastyBites. All rights reserved.                
                  <span> | </span>
                  Cook Happy &nbsp; . &nbsp;Live Healthy
                <i className='bi bi-heart-fill'></i>

              </p>
            </div>
          </div>
        </div>

      </footer>
  );

}
