import { createContext, useState } from "react";

//create context
export const FavoriteContext = createContext([]);

//Provider


export  function FavoriteProvider(props) {
    const [favorites,setFavorites] = useState([])
    //Add Recipe from MyFavorites
    function addFavorites(recipe){
    setFavorites(prev => [...prev, recipe]);
    }
    //Remove Recipe from MyFavorites
    function removeFavorite(item){
      console.log(item)
      setFavorites(prev=>prev.filter(recipe=>recipe.idMeal !== item));
    }
  return (
    <FavoriteContext.Provider value={{favorites,addFavorites,removeFavorite}}>
        {/* Childrens */}
        {props.children}

    </FavoriteContext.Provider>
  )
}
