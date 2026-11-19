import { createBrowserRouter } from "react-router";

// Import Pages
import Home from "../pages/Home/Home";
import Recipe from "../pages/Recipe/Recipe";
import Favorites from "../pages/Favorites/Favorites";
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail";

//Import Loader for getall Recipe
// import { getAllRecipes } from "../loaders/recipeloader";



const AppRouter = createBrowserRouter([
    {
        path:"/",
        Component:Home,
    },
    {
        path:"/recipes",
        Component:Recipe,
        // loader:getAllRecipes,
    },
    {
        path:"/recipes/:id",
        Component:RecipeDetail,
    },
    {
        path:"/favorites",
        Component:Favorites,
    }
    
   
]);

export default AppRouter;