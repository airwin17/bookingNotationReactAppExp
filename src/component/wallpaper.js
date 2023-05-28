import React from "react";

export default function Wallpaper({wallpaperimg,txt}){
    return(
        <section id="wallpaper">
            <img src={wallpaperimg}/>
            <p id="headwallpaper-txt">{txt}</p>
        </section>
    )
}