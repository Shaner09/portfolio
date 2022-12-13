import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'
import PortfolioPiece from './PortfolioPiece';

function Portfolio() {
  return (
    <div className="Portfolio invis" style={{marginBottom:"0px"}}>
      <div className="title"><div>Portfolio:</div><span className="blinker2">|</span></div>
      <PortfolioPiece images={["/resume1.png","/resume2.png"]} title="Resume" description="my resume" link="resume.pdf"/>

      <PortfolioPiece images={["/github.png"]} title="Github" description="My github profile" link="https://github.com/Shaner09"/>

      <PortfolioPiece images={["/unhinderdpic3.jpeg", "/unhinderdpic2.jpeg", "/unhinderdpic1.jpeg"]} title="unhinderd" description="unhinderd is a messaging app that handles translations behind the scenes for seamless communication between people who would otherwise have a difficult time speaking to eachother. This app uses the google translate api to translate to and from over 100 different languages! This app was an origional design created by myself and 3 other developers." link="https://unhindrdclient.vercel.app/"></PortfolioPiece>

      <PortfolioPiece images={["/forloop2.jpg", "/forloop1.jpg"]} title="For Loop Practice" description="Manipulate the code and try to complete all of the challenges! In my time teaching code, I have noticed that many learners get left behind when they are trying to learn the concept of looping through an array. I think it may be too much for some people because they try to take it all in at once. That is why I made this website. The idea was to make a game where learners could play with and learn about one part of the loop at a time to build familiarity, rather than trying to tackle the entire thing at once." link="https://for-loop-practice.vercel.app/"/>

      <PortfolioPiece images={["/pureenrapture3.jpg", "/pureenrapture4.jpg"]} title="Pureenrapturesalon.com" description="Pureenrapturesalon.com is a business website I made for a nearby salon. They were very happy with it!" link="https://www.pureenrapturesalon.com/"/>

      <PortfolioPiece images={["/challenge1.png", "/challenge2.png", "/challenge3.png"]} title="Kenzie Challenges" description="Kenzie Challenges is a website I made to house some of the last assignments that I completed with kenzie. My favorite challenge was tic-tac-toe, where I created a computer player that people have a hard time beating, but there is one sequence that you can use to win! can you find it?" link="challenges"/>
    </div>
  );
}

export default Portfolio;
