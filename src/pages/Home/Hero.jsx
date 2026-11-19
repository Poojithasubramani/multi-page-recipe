import React from 'react'
import { Link } from 'react-router'
import '../../styles/HomeHero.css'


export default function Hero() {
  return (
   <>
    <section className='hero-section'>
        <div className='hero-content'>
            <h2>Welcome to</h2>
            <h1>Tasty<span>Bites</span></h1>
            <h3>Discover Delicious Recipes<br/>
            Cook with Love!
            </h3>
            <p>
                 Explore a world of tasty recipes, from quick bitesto gourmet meals, all in one place.
            </p>
            <Link to="/recipes" className='explore-btn'>
                 Explore Recipes
            <i className='bi  bi-arrow-right'></i>
            </Link>

        </div>
    </section>
    
   </>
  )
}
