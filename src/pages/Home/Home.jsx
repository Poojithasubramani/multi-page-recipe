import React from 'react'
import Navbar from './Navbar'
import "../../App.css";
import Hero from './Hero'
import About from './About'
import Footer from './Footer'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Footer/>
        

    </div>
  )
}
