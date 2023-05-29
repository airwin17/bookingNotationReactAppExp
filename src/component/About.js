import React from "react";
import Dropdown from "./dropdown"
import Header from "./header";
import Wallpaper from "./wallpaper";
import {Footer} from "./footer";
export default function About({navigate}){
    return(
        <React.Fragment>
            <Header navigate={navigate} underline="2"/>
              <Wallpaper wallpaperimg="./images/kalen-emsley-Bkci_8qcdvQ-unsplash-2.png"/>
              <div id="about">
                <Dropdown name="Fiabilité" children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <Dropdown name="Respect" children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Dropdown name="Service" children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Dropdown name="Sécurité" children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
              </div>
            <Footer/>
          </React.Fragment>
    )
}