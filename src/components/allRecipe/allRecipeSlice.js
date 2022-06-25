import { recipesData } from "../../data";

export const loadData = ()=>{
    return {
        type: 'allRecipe/loadData',
        payload: recipesData
    }
}

const initialAllRecipe = [];
export const allRecipeReducer = (state = initialAllRecipe, action)=>{
    switch(action.type){
        case 'allRecipe/loadData':
            return action.payload;
        case 'favRecipe/addRecipe':
            return state.filter(recipe => recipe.id !== action.payload.id);
        case 'favRecipe/removeRecipe':
            return [...state, action.payload];
        default: return state; 
    }
}