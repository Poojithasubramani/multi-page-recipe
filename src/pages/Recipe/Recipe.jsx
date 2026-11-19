import React from 'react'
import Navbar from '../Home/Navbar'
import Hero from '../Recipe/Hero'
import RecipeCard from './RecipeCard'
import Footer from '../Home/Footer'

//import use state
import { useState } from 'react'

export default function Recipe() {
  const[query,setQuery]=useState("");
  const[favorites,setFavorites]=useState([])
  
  //search input field
  function handleSearchInput(value){
      setQuery(value);
  }

  //My favorites functionality

  function myFavorite(likes){

  }
 
  return (
    <>
    <Navbar />
    <Hero handleSearch={handleSearchInput}/>
    <RecipeCard query={query}/>
    <Footer/>

    </>
  )
}
