import React from "react";
import Recipe from "../Recipe";
import { removeRecipe } from "./favRecipeSlice";

export default function FavRecipe({recipes, dispatch}){
    console.log(recipes)
    const onRemoveRecipeHandler = (recipe)=>{
        dispatch(removeRecipe(recipe))
    }
    return (
            <div className="allRecipeContainer">
                <h3>Fav Recipe</h3>
                <div className="recipeCardContainer">
                    {
                        recipes.map(recipe => <Recipe 
                            recipe={recipe}
                            key={recipe.id}
                            btnText = {'Remove'}
                            onClickHandler = {()=> onRemoveRecipeHandler(recipe)}
                            />)
                    }
                </div>
            </div>
    );
}