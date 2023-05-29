import React from "react";
import {Footer} from "./footer";
import Header from './header';
import {Notfound} from "./notfound" ;

export default function Error404({navigate}){
    return(
        <React.Fragment>
          <Header navigate={navigate}/>
          <Notfound navigate={navigate}/>
          <Footer/>
        </React.Fragment>
    )
}