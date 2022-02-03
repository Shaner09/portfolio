import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'
import Challenges from './Challenges';
import Unhinderd from './Unhinderd';

function Portfolio() {
  return (
    <div className="Portfolio invis" style={{marginBottom:"0px"}}>
      <div className="title"><div>Portfolio:</div><span className="blinker2">|</span></div>

      <Unhinderd></Unhinderd>

      <Challenges/>

      <div className="section" style={{width:"90vw"}}>
        <h5><u>Kenzie Challenges</u></h5>
        <p>Kenzie Challenges is an app I made to house some of the last assignments I had to complete for the program I attended through Kenzie Academy. The app serves no purpose other than showcasing a little of what I can do as a programmer.</p>
        <div><img src='/PortfolioPiece1.png' style={{maxWidth:'80vw', maxHeight:"80vh"}}></img></div>
        <a href={'https://github.com/KenzieAcademy-Students/challenge-anagrams-Shaner09'}>Github Link</a>
      </div>
    </div>
  );
}

export default Portfolio;
