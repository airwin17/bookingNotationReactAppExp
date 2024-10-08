import React from "react";
export default function RatingMenu({name,photo,rating,title,subtitle,tags}){
    var stars=[]
    var tagsclass=[]
    var src;
    for(let i=0;i<5;i++){
        if(i+1>rating)
            src="./images/star.svg"
        else
            src="./images/coloredstar.svg"
        stars.push(<img className='goldstar' src={src} key={"img"+i} alt="star"/>)
    }
    for(let i=0;i<tags.length;i++){
        tagsclass.push(<div className='tag' key={"tag"+i}>{tags[i]}</div>)
    }
    return(
        <div id="rating-menu" >
            <h1 className='titre'>{title}</h1>
            <h2 className='soustitre'>{subtitle}</h2>
            <div className='tagcontainer'>
               {tagsclass}
            </div>
            <div className='profile'>
                <div id='img-profil-container'>
                    <img id="profil-img" alt="profil image" src={photo}/>
                </div>
                <p id="name" >{name}</p>
            </div>
            <div id="rating">
                {stars}
            </div>
        </div>
    )
}