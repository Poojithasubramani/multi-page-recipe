import React from 'react'
import { useState } from 'react';
import useRecipe from '../../hooks/useRecipe'
import { Link } from 'react-router';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritecontext';
import '../../styles/RecipeCard.css'


export default function RecipeCard({query}) {
  const {recipesData,loading,error}= useRecipe(query);
  const { addFavorites }=useContext(FavoriteContext);
  const { favorites } = useContext(FavoriteContext);
  return (
    <>
     <main className="recipe-section">

        <div className="container">
          {/* Recipe Cards */}
          <div className="row g-4 recipe-grid">

           { 
           !query.trim()?(
            <div className="col-12 d-flex justify-content-center align-items-center w-100">
            <div className="alert alert-danger text-center p-4 my-4 w-75">
              <h5>Ready to Discover Delicious Recipes?</h5>
              <p className="mb-0">Search for your favorite food like Chicken, 
                Pizza,Pasta. We'll find delicious recipes matching your search!.
              </p>
              <span className='text-white bg-success rounded px-4'>Start Your Food Journey!</span> 
            </div>
            </div>
          ):
           loading ? (
              <div className="col-12 d-flex justify-content-center align-items-center w-100">
                <div className="spinner-border text-warning" role="status">
                </div>
              </div>
            ) :
            error?( <div className="col-12 d-flex justify-content-center align-items-center w-100">
            <div className="alert alert-info text-center p-4 my-4 w-75">
              <h5>"Oops! Something went wrong. Unable to fetch recipes. Please try again later."</h5>
              <p className="mb-0">Search for your favorite food like Chicken, 
                Pizza,Pasta. We'll find delicious recipes matching your search!.
              </p>
              <span className='text-white bg-success rounded px-4'>Start Your Food Journey!</span> 
            </div>
            </div>):
            recipesData.length>0?
            (recipesData.map((recipe) => (

              <div className="col-12 col-sm-6 col-lg-3"
                key={recipe.idMeal}>

                <div className="recipe-card">

                  {/* Image */}
                  <div className="recipe-image">

                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                    />

                    <span className="recipe-tag">
                      {recipe.strCountry}
                    </span>
                    <button 
                        onClick={()=>addFavorites(recipe)}
                        disabled={favorites.some(item=>item.idMeal===recipe.idMeal)}
                        title="Add to Favorites">
                        
                      <i className={favorites.some(item=>item.idMeal===recipe.idMeal)?
                          "bi bi-heart-fill recipe-heart text-danger":"bi bi-heart-fill recipe-heart text-warning"}></i>
                      </button>

                  </div>

                  {/* Card Content */}
                  <div className="recipe-content">

                    <h4>{recipe.strMeal}</h4>



                    <button className="view-btn">
                      <Link to ={`/recipes/${recipe.idMeal}`} className='view-link'>View Recipe Details</Link>
                      <i className="bi bi-arrow-right"></i>
                    </button>

                  </div>

                </div>

              </div>

            ))):
             <div className="col-12 d-flex justify-content-center align-items-center w-100">
        <div className="alert alert-warning text-center p-4 my-4 w-75">
          <h5>No Recipes Found!</h5>
          <p className="mb-0">Sorry, no matching Recipes available.</p>
        </div>
      </div>
            }

          </div>
        </div>

      </main>
    </>
  )
}
