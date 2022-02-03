import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'

function TechnicalSkills() {
  return (
    <div className="Technical invis">
      <div className="title"><div>Technical Skills:</div><span className="blinker">|</span></div>
      <div className="section" style={{width:"90vw"}}>
        <Row style={{padding:"10px"}}>
          <Col xs={6} style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'0px'}}>
            <div style={{width:"max-content", margin:"auto"}}>
              <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>React</div>
              <div style={{width:"max-content"}}><img src="/javascript.png" style={{height:"40px", width:"40px"}}></img>Javascript</div>
              <div style={{width:"max-content"}}><img src="/node.png" style={{height:"40px", width:"40px"}}></img>Node.js</div>
            </div>
          </Col>
          <Col xs={6} >
            <div style={{width:"max-content", margin:"auto"}}>
              <div style={{width:"max-content"}}><img src="/html.png" style={{height:"40px", width:"40px"}}></img>HTML/CSS</div>
              <div style={{width:"max-content"}}><img src="/react.png" style={{height:"40px", width:"40px"}}></img>MongoDB</div>
              <div style={{width:"max-content"}}><img src="/java.png" style={{height:"40px", width:"40px"}}></img>Java</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TechnicalSkills;
