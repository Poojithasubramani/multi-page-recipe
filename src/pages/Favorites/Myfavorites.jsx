import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { FavoriteContext } from '../../context/favoritecontext'
import { Link } from 'react-router';
export default function Myfavorites() {
  useEffect(() => {
          window.scrollTo(0, 0);
          }, []);
    const {favorites} = useContext(FavoriteContext);
    const {removeFavorite} = useContext(FavoriteContext);
     if(!favorites){
        return <p>Loading....</p>
    }
  return (
    <>
    <main className="recipe-section">
      <div className="container">

          {/* Favorite Cards */}
        <div className="row g-4 recipe-grid">
          {favorites.length>0?
          (favorites.map((item)=>(
          <div className="col-12 col-sm-6 col-lg-3" key={item.idMeal}>
            <div className="recipe-card">

                {/* Image */}
              <div className="recipe-image">

                  <img src={item.strMealThumb} alt={item.strMeal} />
                  <span className="recipe-tag">
                    {item.strCountry}
                  </span>
                  <button>
                    <i className="bi bi-heart-fill recipe-heart text-danger"></i>
                  </button>

              </div>

                    {/* Card Content */}
              <div className="recipe-content">
                <h5>{item.strMeal}</h5>
                <button className="btn btn-outline-danger rounded btn-sm"
                onClick={()=>removeFavorite(item.idMeal)}>
                    <i className="bi bi-trash3"></i>
                    Remove
                </button>
                <button className="view-btn">
                  <Link to ={`/recipes/${item.idMeal}`} className='view-link'>View Recipe Details</Link>
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            </div>

          </div>


          ))):
            <div className="col-12 d-flex justify-content-center align-items-center w-100">
                <div className="alert alert-warning text-center p-4 my-4 w-75">
                <p><i className='bi bi-heart-fill text-danger'>
                  </i></p>
                <h5>No Favorites Yet!</h5>
                <p className="mb-0">You haven't added any recipes to your favorites yet. 
                  Explore recipes and save your favorites here!
                </p>
                <p className='text-danger '>Explore Recipes</p>
              </div>
            </div>
          }
        </div>
      </div>
    </main>
  </>
  )
}
