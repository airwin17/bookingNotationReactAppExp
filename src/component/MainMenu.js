import React from "react";
export default function MainMenu({obj,navigate}){
    var jsxobj=[]
    var s=null;
    for(var i=0;i<obj.length;i++){
        let o=obj[i].id;
        jsxobj.push(
            <div className="main-article-container" key={"a"+i} onClick={()=>{
                navigate("/"+o)}}>
                <img className="main-article-img" src={obj[i].cover}/>
                <h1 className="main-article-title">{obj[i].title}</h1>
            </div>
        )
    }
    
return(
    <div id="mainmenu">
        {jsxobj}
    </div>
)
}