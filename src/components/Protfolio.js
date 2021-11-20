import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function Portfolio() {
  return (
    <Container style={{borderBottom:'5px solid #355e3b',background:'#F5F8DE'}}>
      <h2>Porfolio Pieces:</h2>
      <h5><u>Kenzie Challenges</u></h5>
      <p>Kenzie Challenges is an app I made to house some of the last assignments I had to complete for the program I attended through Kenzie Academy. The app serves no purpose other than showcasing a little of what I can do as a programmer.</p>
      <div><img src='/PortfolioPiece1.png' style={{width:'300px'}}></img></div>
      <a href={'https://github.com/KenzieAcademy-Students/challenge-anagrams-Shaner09'}>Github Link</a>
</Container>
  );
}

export default Portfolio;
