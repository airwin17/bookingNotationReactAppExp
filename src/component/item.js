import React from "react";
export default function Item({src,title,kay,id,navigate}){
    return(
        <div className="main-article-container" key={kay} onClick={()=>{
            navigate("/"+id)}}>
            <img className="main-article-img" src={src}/>
            <h1 className="main-article-title">{title}</h1>
        </div>
    )
}