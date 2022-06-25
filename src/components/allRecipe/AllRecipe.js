import React, { useEffect } from "react";
import {loadData} from './allRecipeSlice';
import Recipe from '../Recipe';
import { addRecipe } from "../favRecipe/favRecipeSlice";

export default function AllRecipe(props){
    const {recipes, dispatch} = props;
    const onFirstRender = ()=>{
        dispatch(loadData());
    }
   useEffect(onFirstRender, []);

   const onAddRecipeHandler = (recipe)=>{
    dispatch(addRecipe(recipe));
   }
    return (
            <div className="favRecipeContainer">
                <h3>All Recipe</h3>
                <div className="recipeCardContainer">
                    {
                        recipes.map(recipe => <Recipe 
                            key={recipe.id} 
                            recipe={recipe} 
                            onClickHandler = {()=> onAddRecipeHandler(recipe)}
                            btnText = {'add to Fav'}
                            />)
                    }
                </div>
            </div>
    );
}