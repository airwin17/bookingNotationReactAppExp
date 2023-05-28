import React from "react";
import Gallery from "./gallery";
import RatingMenu from "./RatingManu";
import Dropdown from "./dropdown";
export default function DescriptionPage({article}){
    //console.log(article.equipments)
    var list=[]
    for(var i=0;i<article.equipments.length;i++){
        list.push(<li key={"uli"+i}> {article.equipments[i]}</li>);
    }
    
    var elementslist=
        <ul className="ul" key={"uli"}>
            {list}
        </ul>
    ;
    return (
        <>

        <Gallery imagesc={article.pictures} />
        <RatingMenu name={article.host.name} photo={article.host.picture} rating={article.rating} title={article.title} subtitle={article.location} tags={article.tags}/>
        <section id="about-article">
            <Dropdown name={"Description"} children={article.description}/>
            <Dropdown name={"Équipements"} children={elementslist} />
        </section>
        </>
    )
}