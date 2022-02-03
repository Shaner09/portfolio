import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'

function Intro() {
  return (
    <div className="Intro invis" style={{marginTop:"10px"}}>
    <div className="section" style={{width:"90vw"}}>
  <Row> 
    <Col xs={4} md={4} style={{padding:'0px'}}>
    <Image src={'/resumepic.jpeg'} style={{margin:'5%', width:'90%', height:'90%'}} rounded></Image>
    </Col>
    <Col xs={8} md={8} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <h1>Shane Richter</h1>
      <div>Full-Stack Software Engineer</div>
    </Col>
  </Row>
</div>
</div>
  );
}

export default Intro;
