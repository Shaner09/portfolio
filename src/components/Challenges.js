import React, { useState } from 'react';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaBars, FaStackExchange, FaUserAlt } from "react-icons/fa";

function Challenges() {
  const images = ["/PortfolioPiece1.png"]
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

        <h5><u>unhinderd</u></h5>
        <div style={{}}>
        <Button style={{zIndex:"1", marginRight:"-40px", position:"relative", height:"40px", width:"40px", background:"rgba(0, 0, 0, .5)", border:"none"}} onClick={()=>arrowClick("left")}><FaArrowLeft/></Button>
        <Image src={image} style={{maxWidth:'80vw', maxHeight:"80vh", zIndex:"2"}}></Image>
        <Button style={{zIndex:"5",border:"none", position:"relative", marginLeft:"-40px", height:"40px", width:"40px", background:"rgba(0, 0, 0, .5)"}} onClick={()=>arrowClick("right")}><FaArrowRight/></Button>
        </div>
        <p>unhinderd is a messaging app that handles translations behind the scenes for seamless communication between people who would otherwise have a difficult time doing so. This app uses the google translate api to translate to and from over 100 different languages!</p>
      </div>
    
  );
}

export default Challenges;
