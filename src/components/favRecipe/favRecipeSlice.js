export const addRecipe = (recipe)=>{
    return {
        type: 'favRecipe/addRecipe',
        payload: recipe
    }
}
export const removeRecipe = (recipe)=> {
    return {
        type: 'favRecipe/removeRecipe',
        payload: recipe
    }
}

const initailFavRecipe = [];
export const favRecipeReducer = (state = initailFavRecipe, action)=>{
    switch(action.type){
        case 'favRecipe/addRecipe':
            return [...state, action.payload]
        case 'favRecipe/removeRecipe':
            return state.filter(recipe => recipe.id !== action.payload.id);
        default: return state;
    }
}