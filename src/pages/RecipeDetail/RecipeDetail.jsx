import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../Home/Navbar';
import RecipeSection from '../RecipeDetail/RecipeSection'

export default function RecipeDetail() {
    const {id}=useParams();
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    
    //Api call to get recipe  through selected ID
    useEffect(()=>{
        async function getRecipe() {
            try{
                setLoading(true);
                setError(null);
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const RecipeDetail= response.data.meals[0];
                setData(RecipeDetail);
            }
            catch(error){
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        getRecipe();
    },[])
  return (
    <>
        <Navbar/>
        <RecipeSection data={data} />
        
    </>
  )
}
