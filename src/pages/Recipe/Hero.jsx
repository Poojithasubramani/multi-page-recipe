import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router'
import '../../styles/RecipeHero.css'


export default function Hero({handleSearch}) {
  const [search,setSearch]=useState("");
  const [searchParams,setSearchParams]=useSearchParams();
  return (
    <section className="recipe-heros">

      <div className="container">
        <div className="heros-content">

          <p className="heros-subtitle">
            <i className="bi bi-egg-fried"></i>
            Our Delicious
          </p>

          <h1>
            Recipes
          </h1>

          <p className="heros-tagline">
            Simple • Healthy • Tasty
          </p>
          <form
            className="heros-search-form"
            onSubmit={(event)=>{
                event.preventDefault()
                setSearchParams({q:search})
                handleSearch(search)}}>

            <div className="input-group">

              <input
                type="text"
                className="form-control"
                placeholder="Search recipes..."
                value={search}
                onChange={(event)=>{
                  setSearch(event.target.value)
                  if(event.target.value===""){
                    handleSearch("")
                    setSearchParams("")
                  }
                }}

              />

              <button
                type="submit"
                className="btn search-btn"
              >
                <i className="bi bi-search"></i>
                <span>Search</span>
              </button>

            </div>

          </form>


        </div>
      </div>

    </section> 
     )
}
