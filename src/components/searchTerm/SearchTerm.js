import React from "react";
import { setSearchTerm, clearTerm } from "./searchTermSlice";

export default function SearchTerm({searchTerm, dispatch}){
    const onSetSerachTermHendler = ({target})=>{
        dispatch(setSearchTerm(target.value));
    }
    const onClearSerachTermHandler = ()=>{
        dispatch(clearTerm())
    }
    
    return (
        <div className="searchTermContainer">
            <input 
            id="searchTerm"
            value={searchTerm}
            placeholder= 'search recipes'
            onChange={onSetSerachTermHendler}
            />
            {searchTerm.length > 0 ? <button onClick={onClearSerachTermHandler}>❌</button> : ''}
        </div>
    );
}