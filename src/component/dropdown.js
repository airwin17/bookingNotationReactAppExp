import React from "react"
export default class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.div=React.createRef();
        this.paragraph=React.createRef();
        this.img=React.createRef();
        this.hide=false;
    }
    display(){
        if(this.hide===true){
            this.paragraph.current.style.display="block"
            this.div.current.style.paddingBottom="10px"
            this.img.current.style.rotate="0deg"
            this.hide=false
        }else{
            this.paragraph.current.style.display="none"
            this.div.current.style.paddingBottom="0"
            this.img.current.style.rotate="180deg"
            this.hide=true 
        }

    }
    render(){
        return (
            <div className='drop-g' ref={this.div} key={this.props.kay} style={this.props.style}>
              <button className="drop-but" onClick={()=>this.display()} ref={this.button}>{this.props.name}
              <img className="drop-icon" src="./images/Vector.png" ref={this.img} alt="drop-icon"/>
              </button>
              <div className='drop-p'ref={this.paragraph} >{this.props.children}</div>
            </div>
        )
    }
}