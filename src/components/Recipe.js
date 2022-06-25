import React from "react";
import Button from "./Button";

export default function Recipe({recipe,onClickHandler,btnText}){
    return (
        <div className="recipeCard">
            <h4>{recipe.name}</h4>
            <Button onClickHandler = {onClickHandler} btnText={btnText}/>
        </div>
    );
}