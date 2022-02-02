import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function Portfolio() {
  return (
    <Container className="Portfolio invis" style={{marginBottom:"0px"}}>
      <div className="title"><div>Portfolio:</div><span className="blinker2">|</span></div>
    <Container className="section" style={{width:"90vw"}}>
      <h2>Porfolio Pieces:</h2>
      <h5><u>Kenzie Challenges</u></h5>
      <p>Kenzie Challenges is an app I made to house some of the last assignments I had to complete for the program I attended through Kenzie Academy. The app serves no purpose other than showcasing a little of what I can do as a programmer.</p>
      <div><img src='/PortfolioPiece1.png' style={{width:'300px'}}></img></div>
      <a href={'https://github.com/KenzieAcademy-Students/challenge-anagrams-Shaner09'}>Github Link</a>

      <h5><u>unhinderd</u></h5>
      <p>unhinderd is a messaging app that handles translations behind the scenes for seamless communication between people who would otherwise have a difficult time doing so. This app uses the google translate api to translate to and from over 100 different languages!</p>
      <div><img src='/unhinderdpic3.jpeg' style={{width:'300px'}}></img></div>
      <a href={'https://github.com/KenzieAcademy-Students/challenge-anagrams-Shaner09'}>Github Link</a>
</Container>
</Container>
  );
}

export default Portfolio;
