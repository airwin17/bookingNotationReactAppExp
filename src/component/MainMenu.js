import React from "react";
import Item from "./item";
export default function MainMenu({obj,navigate}){
    var jsxobj=[]
    for(var i=0;i<obj.length;i++){
        jsxobj.push(
            <Item src={obj[i].cover} title={obj[i].title} id={obj[i].id} key={"im"+i} kay={"i"+i} navigate={navigate}/>
        )
    }
return(
    <div id="mainmenu">
        {jsxobj}
    </div>
)
}