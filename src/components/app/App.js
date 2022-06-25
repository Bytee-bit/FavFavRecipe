import React from "react";
import SearchTerm from "../searchTerm/SearchTerm";
import FavRecipe from "../favRecipe/FavRecipe";
import AllRecipe from "../allRecipe/AllRecipe";

export default function App({state, dispatch}){
    console.log(state);
    const allRecipe = filteredRecipe(state.allRecipe, state.searchTerm); 
    const favRecipe = filteredRecipe(state.favRecipe, state.searchTerm);
    return(
        <div className="appContainer">
            <SearchTerm searchTerm = {state.searchTerm} dispatch = {dispatch}/>
            <FavRecipe recipes = {favRecipe} dispatch={dispatch}/>
            <AllRecipe recipes = {allRecipe} dispatch={dispatch}/>
        </div>
    );
}

// helper fuction

const filteredRecipe = (recipes, term)=>{
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(term.toLowerCase()));
}