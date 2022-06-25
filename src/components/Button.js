import React from "react";


export default function Button({onClickHandler, btnText}){
    return <button onClick={onClickHandler}>{btnText}</button>
}