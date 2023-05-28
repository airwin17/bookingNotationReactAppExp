import React from "react";

/*export function Notfound(){
    const to=useNavigate();
    function gohome(){
        
        to("/Accueil");
      }
    
    return(
        <section id="notfoundsection">
            <p id="i404">404</p>
            <p id="notfound">Oups! La page que vous demandez n'existe pas.</p>
            <p id="page" onClick={gohome}>Retourner sur la page d’accueil</p>
        </section>
    )
}*/


export class Notfound extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <section id="notfoundsection">
            <p id="i404">404</p>
            <p id="notfound">Oups! La page que vous demandez n'existe pas.</p>
            <p id="page" onClick={()=>this.props.navigate("/Accueil")}>Retourner sur la page d’accueil</p>
        </section>
        )
    }
}
