import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function TechnicalSkills() {
  return (
    <Container style={{borderBottom:'5px solid #355e3b',background:'#F5F8DE'}}>
      <Row>
        <Col xs={5} style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'0px'}}>
    <h2>Technical Skills: </h2>
    </Col>
    <Col xs={7}>
    <ul style={{listStyleType:'none'}}>
      <li>React</li>
      <li>JavaScript</li>
      <li>HTML/CSS</li>
      <li>MongoDB</li>
      <li>VS Code</li>
    </ul>
    </Col>
    </Row>
</Container>
  );
}

export default TechnicalSkills;
