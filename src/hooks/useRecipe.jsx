import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

export default function useRecipe(query) {

    //Declare State variables
    const[recipesData,setRecipesData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    
    //APi call to  get All Recipes

    useEffect(()=>{
        async function fetchRecipes() {
            if(query.trim()===""){
                setRecipesData([]);
                return;
            }
            try{
                setLoading(true);
                setError(null);
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+query);
                const Allrecipes =  response.data.meals || [];
                const fetchedRecipe = Allrecipes.filter(function (recipe) {
                    return recipe.strMeal.toLowerCase().includes(query.toLowerCase()); 
                });
                setRecipesData(fetchedRecipe);
                }
            catch(err){
                    setError(err.message);
                }
            finally {
                    setLoading(false);

                }
        }
        fetchRecipes();
    },[query]);
    return {recipesData,loading,error};
  
}
