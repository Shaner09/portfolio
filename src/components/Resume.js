import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function Resume() {
  return (
    <Container className="Links invis">
      <div className="title"><div>Links:</div><span className="blinker">|</span></div>
    <Container className="section" style={{width:"90vw"}}>
      <div><a href={'https://github.com/Shaner09'}>Github profile</a></div>
      <div><a href='resume4.pdf'>Resume</a></div>
</Container>
</Container>
  );
}

export default Resume;
