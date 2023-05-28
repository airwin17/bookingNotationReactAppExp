import { Navigate, useNavigate } from 'react-router-dom';
import Header from './component/header';
import {Notfound} from "./component/notfound" ;
import React from "react";
import {Routes,Route} from "react-router-dom";
import {Footer} from "./component/footer";
import Dropdown from "./component/dropdown";
import Gallery from "./component/gallery";
import Wallpaper from "./component/wallpaper";
import RatingMenu from "./component/RatingManu";
import DescriptionPage from "./component/DescriptionPage";
import MainMenu from "./component/MainMenu";
import object from "./obj.json";
import "./style.css";


export default function App() {
  const to=useNavigate();
    function goto(str){
        to(str);
      }
  var routetable=[]
  for(var i=0;i<object.length;i++){
      routetable.push(<Route key={"r"+i} path={"/"+ object[i].id} element={
        <React.Fragment>
          <Header navigate={goto}/>
          <DescriptionPage article={object[i]}/>
          <Footer/>
        </React.Fragment>
      } />)   
  }
  
  return (
    
    <Routes>
          {/*
          1=accueil
          2=about
          */}
          {routetable}
      <Route
      path='/Accueil'
      element={
        <React.Fragment>
          <Header navigate={goto} underline="1"/>
          <MainMenu navigate={goto} obj={object}/>
          <Footer/>
        </React.Fragment>
      }
      />
      <Route
      path='*'
      element={
        <React.Fragment>
          <Header navigate={goto}/>
          <Notfound navigate={goto}/>
          <Footer/>
        </React.Fragment>
      }
      />
      <Route
        path="/About"
        element={
          <React.Fragment>
            <Header navigate={goto} underline="2"/>
              <Wallpaper wallpaperimg="./images/kalen-emsley-Bkci_8qcdvQ-unsplash-2.png"/>
              <div id="about">
                <Dropdown name="Fiabilité" children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <Dropdown name="Respect" children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Dropdown name="Service" children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Dropdown name="Sécurité" children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
              </div>
            <Footer/>
          </React.Fragment>
        }
      />
    </Routes>
  );
}



