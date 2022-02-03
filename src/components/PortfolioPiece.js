import React, { useState } from 'react';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaBars, FaStackExchange, FaUserAlt } from "react-icons/fa";

function PortfolioPiece(props) {
  const images = props.images
  const [image, setImage] = useState(images[0])
  const [imageIndex, setImageIndex] = useState(0)
  const [ignore, _setIgnore] = useState(false)
  const ignoreRef = React.useRef(ignore);
  const setIgnore = (data) => {
    ignoreRef.current = data;
    _setIgnore(data);
  };


  const arrowClick = (direction)=> {
    let newIndex
    if (direction==="right") {
      newIndex = imageIndex===images.length-1 ? 0 : imageIndex+1
    }
    if (direction==="left") {
        newIndex = imageIndex===0 ? images.length-1 : imageIndex-1
    }
    setImageIndex(newIndex)
    setImage(images[newIndex])
    setIgnore(true)
  }

  const sectionClick = ()=> {
    if (!ignoreRef.current) {
      console.log("hi")
    }
    setIgnore(false)
  }
  return (
    <div className="section" style={{width:"90vw", marginBottom:"20px"}} onClick={()=>sectionClick()}>

        <a href={props.link} style={{color:"white", fontSize:"24px"}}><u>{props.title}</u></a>
        <div >
        <Button style={{marginRight:"-40px", position:"relative", height:"40px", width:"40px", background:"rgba(0, 0, 0, .5)", border:"none"}} onClick={()=>arrowClick("left")}><FaArrowLeft/></Button>
        <Image onClick={()=>window.location.href=props.link} src={image} style={{maxWidth:'80vw', maxHeight:"80vh"}}></Image>
        <Button style={{border:"none", position:"relative", marginLeft:"-40px", height:"40px", width:"40px", background:"rgba(0, 0, 0, .5)"}} onClick={()=>arrowClick("right")}><FaArrowRight/></Button>
        </div>
        <p style={{marginTop:"10px"}}>{props.description}</p>
      </div>
    
  );
}

export default PortfolioPiece;
