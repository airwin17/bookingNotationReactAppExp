import React from "react";
export default function Gallery({imagesc}){
    console.log(2)
    var jsxsection=React.createRef();
    var galp=React.createRef();
    var jsximgref=React.createRef();
    var imgTarget=0;
    
    function navto(int){
        imgTarget=int;
        jsximgref.current.src=imagesc[int];
        galp.current.innerHTML=(imgTarget+1)+"/"+(imagesc.length+1)
    }
    function next(){
        if(imgTarget==imagesc.length-1){
            navto(0);
        }else{
            navto(imgTarget+1)
            
        }
    }
    function preview(){
        if(imgTarget==0){
            navto(imagesc.length-1);
        }else{
            navto(imgTarget-1)
        }
    }
return(
    <section className='gal' >
        <div className="gat-div" ref={jsxsection}>
            <img className='gal-img' src={imagesc[imgTarget]} ref={jsximgref}/>
        </div>
        <button className='gal-arrow-next' onClick={()=>next()}>{">"}</button>
        <button className='gal-arrow-preview' onClick={()=>preview()}>{"<"}</button>
        <p className='gal-txt' ref={galp}>{(imgTarget+1)+"/"+(imagesc.length+1)}</p>
    </section>
)
} 