import React from "react";
import Header from "./header";
import Wallpaper from "./wallpaper";
import {Footer} from "./footer";
import MainMenu from "./MainMenu";
export default function Accueil({navigate,underline,object}){
    return(
        <React.Fragment>
          <Header navigate={navigate} underline={underline}/>
          <Wallpaper wallpaperimg="./images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg" txt="Chez vous, partout et ailleurs"/>
          <MainMenu navigate={navigate} obj={object}/>
          <Footer/>
        </React.Fragment>
    )
}