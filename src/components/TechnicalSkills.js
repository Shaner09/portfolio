import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function TechnicalSkills() {
  return (
    <Container className="Technical invis">
      <div className="title"><div>Technical Skills:</div><span className="blinker">|</span></div>
      <Container className="section" style={{width:"90vw"}}>
        <Row style={{padding:"10px"}}>
          <Col xs={6} style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'0px'}}>
            <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>React</div>
            <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>Javascript</div>
            <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>Node.js</div>
          </Col>
          <Col xs={6}>
            <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>HTML/CSS</div>
            <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>MongoDB</div>
            <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>Java</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TechnicalSkills;
