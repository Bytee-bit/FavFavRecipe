import { combineReducers, createStore } from "redux"
import { allRecipeReducer } from "../allRecipe/allRecipeSlice";
import { favRecipeReducer } from "../favRecipe/favRecipeSlice";
import { searchTermReducer } from "../searchTerm/searchTermSlice";



const reducers = {
    allRecipe: allRecipeReducer,
    favRecipe: favRecipeReducer,
    searchTerm: searchTermReducer
}
export const store = createStore(combineReducers(reducers));

/*
const rootReducer = (state={}, action)=>{
   const nextState = {
    allRecipe: allRecipeReducer(state.allRecipe, action),
    favRecipe: favRecipeReducer(state.favRecipe, action),
    searchTerm: searchTermReducer(state.searchTerm, action)
   }
   return nextState;
}
export const store = createStore(rootReducer);
*/