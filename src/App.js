import { Navigate, useNavigate } from 'react-router-dom';
import Header from './component/header';
import {Notfound} from "./component/notfound" ;
import React from "react";
import {Routes,Route} from "react-router-dom";
import {Footer} from "./component/footer";
import DescriptionPage from "./component/DescriptionPage";
import About from "./component/About"
import object from "./obj.json";
import Error404 from "./component/error404";
import Accueil from "./component/Accueil"
import "./style.css";


export default function App() {
  const to=useNavigate();
    function goto(str){
        to(str);
      }
  var routetable=[]
  for(var i=0;i<object.length;i++){
      routetable.push(
      <Route key={"r"+i} path={"/"+ object[i].id} element={
        <React.Fragment>
          <Header navigate={goto}/>
          <DescriptionPage article={object[i]}/>
          <Footer/>
        </React.Fragment>
      }/>)
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
        <Accueil navigate={goto} underline={"1"} object={object}/>
      }
      />
      <Route
      path='*'
      element={
        <Error404 navigate={goto}/>
      }
      />
      <Route
        path="/About"
        element={
          <About navigate={goto}/>
        }
      />
    </Routes>
  );
}



