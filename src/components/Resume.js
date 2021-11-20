import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function Resume() {
  return (
    <Container style={{borderBottom:'5px solid #355e3b',background:'#F5F8DE'}}>
      <h2>Links:</h2>
      <div><a href={'https://github.com/Shaner09'}>Github profile</a></div>
      <div><a href='resume4.pdf'>Resume</a></div>
</Container>
  );
}

export default Resume;
