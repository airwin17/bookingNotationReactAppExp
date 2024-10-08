
import React from "react"

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.accueil=React.createRef();
        this.Propos=React.createRef();
    }
    
    
    render(){
        const mystyle={
            textDecorationLine: 'underline'
        };
        var jsx;
        if(this.props.underline==="1"){
            jsx=
            (<header>
                <nav className="nav-bar">
                    <img id ="logo" src="./images/LOGO.png" alt="logo"/>
                    <div id="menu">
                        <h1 id="accueil"  onClick={()=>this.props.navigate("/Accueil")} style={mystyle} >Accueil</h1>
                        <h1 id="Propos"  onClick={()=>this.props.navigate("/About")}>A Propos</h1>
                    </div>
                </nav>
            </header>)
        }else if(this.props.underline==="2"){ 
            jsx=
            (<header>
                <nav className="nav-bar">
                    <img id ="logo" src="./images/LOGO.png" alt="logo"/>
                    <div id="menu">
                        <h1 id="accueil"  onClick={()=>this.props.navigate("/Accueil")}  >Accueil</h1>
                        <h1 id="Propos"  onClick={()=>this.props.navigate("/About")} style={mystyle}>A Propos</h1>
                    </div>
                </nav>
            </header>)
        }else{
            jsx=
            (<header>
                <nav className="nav-bar">
                    <img id ="logo" src="./images/LOGO.png" alt="logo"/>
                    <div id="menu">
                        <h1 id="accueil"  onClick={()=>this.props.navigate("/Accueil")}  >Accueil</h1>
                        <h1 id="Propos"  onClick={()=>this.props.navigate("/About")}>A Propos</h1>
                    </div>
                </nav>
            </header>)
        }
        return (jsx)
    }
}

