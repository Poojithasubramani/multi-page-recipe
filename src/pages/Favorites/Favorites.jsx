import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Myfavorites from './Myfavorites'
import HeroFavorites from './HeroFavorites'
import { FavoriteProvider } from '../../context/favoritecontext'
import '../../styles/Myfavorites.css'
import '../../styles/RecipeCard.css'

export default function Favorites() {
  return (
    <>
    <Navbar/>
      <HeroFavorites/>
      <Myfavorites/>

    <Footer/>

    </>
  )
}
