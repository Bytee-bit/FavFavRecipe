export const setSearchTerm = (searchTerm)=>{
    return {
        type: 'searchTerm/setSearchTerm',
        payload: searchTerm
    }
}
export const clearTerm = ()=>{
    return {
        type:'searchTerm/clearTerm'
    }
}
const initailSearchTerm = '';
export const searchTermReducer = (state = initailSearchTerm, action)=>{
    switch(action.type){
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearTerm':
            return '';
        default: return state;
    }
}