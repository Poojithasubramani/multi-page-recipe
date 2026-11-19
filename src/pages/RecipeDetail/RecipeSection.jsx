import React from 'react'
import { useEffect } from 'react';
import '../../styles/RecipeDetail.css'


export default function RecipeSection({data}) {
    if(!data){
        return <p>Loading....</p>
    }
    // scrolltotop function
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
    // creating array of ingredientlist to display igredients
    let ingredientslist =[];
    for(let i=1;i<=20;i++){
        const ingredient = data[`strIngredient${i}`]
        const measurement = data[`strMeasure${i}`]
        
        if(ingredient && ingredient.trim()!=="" ){
            // console.log(ingredient +"-"+ measurement);
            ingredientslist.push({
                name:ingredient,
                quantity:measurement
            });

        }

    }

    //split instructions seperated by "."
    const instructionlist =[];
    const instruction = data.strInstructions||"";
    const sentence = instruction
                .trim()
                .split(/(?=\d+\.\s)|(?<=[.!?])\s+(?=[A-Z])/)
                .map(item => item.replace(/^\d+\.\s*/, "").trim())
                .filter(item => item !== "");
       

  return (
    <section>
        <div className="container-fluid ">
            <div className="row g-4 align-items-center recipe-header mt-3">
                <div className="col-lg-6 col-md-3">
                    <div className="recipe-image-box">
                        <img
                            src={data.strMealThumb}
                            alt={data.strMeal}
                            className="img-fluid recipe-main-image"
                        />
                        <span className="category-badge">{data.strCategory}</span>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="recipe-info">
                        <h1 className='recipe-title'>{data.strMeal}</h1>
                        <div className="recipe-meta d-flex flex-wrap g-3">
                            <div className="meta-item">
                                <i className='bi bi-globe'></i>
                                <div>
                                    <h6>{data.strArea}</h6>
                                    <small>Area</small>
                                </div>
                            </div>

                            <div className="meta-item">
                                <i className='bi bi-flag'></i>
                                <div>
                                    <h6>{data.strCountry}</h6>
                                    <small>Country</small>
                                </div>
                            </div>
                            <div className="meta-item">
                                <i className='bi bi-egg-fried'></i>
                                <div>
                                    <h6>{data.strCategory}</h6>
                                    <small>Category</small>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start w-100 gap-4">
                               

                            {/* <button
                                className="favorite-btn">
                                <i className="bi bi-heart"></i>
                                Add to Favorites
                            </button> */}

                             {data.strYoutube && (
                                <a
                                    href={data.strYoutube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="youtube-btn"
                                >
                                    <i className="bi bi-youtube"></i>
                                    Watch YouTube
                                </a>
                            )}
                        </div>

                    </div>

                </div>
            </div>

            {/* recipe ingredients and instructions */}

            <div className="row g-4 mt-3">
                {/* ingredient list */}

                <div className="col-lg-4 col-md-2">
                    <div className="detail-card h-100">
                        <div className="section-heading">
                            <i className='bi bi-basket'></i>
                            <h3>Ingredients</h3>
                        </div>
                        <div className="ingredients-list">
                            {ingredientslist.map((list,index)=>{

                            
                            return <div className="ingredient-item" key ={index}>
                                <img src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(list.name)}-Small.png`} alt={list.name}/>
                                <span className="ingredient-name">{list.name}</span>
                                <span className='ingredient-quantity'>{list.quantity}</span>
                            </div>
                            })}
                        </div>

                    </div>
                </div>

                {/* Recipe instructions  */}

                <div className="col-lg-8 col-md-4">
                    <div className="detail-card h-100">
                        <div className="section-heading">
                            <i className='bi bi-journal-text'></i>
                            <h3>Instructions</h3>
                        </div>
                        <div className="instructions-list">
                               <ol>
                                {sentence.map((item,index)=>(
                                    <li key={index}>{item}</li>
                                ))}
  
                               </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
