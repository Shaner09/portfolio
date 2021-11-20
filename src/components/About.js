import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <Container style={{borderBottom:'5px solid #355e3b',background:'#F5F8DE'}}>
      <h2>About Me:</h2>
      <h6><u>As a Developer</u></h6>
      <p style={{textAlign:'left'}}>I am a MERN certified full-stack developer through Kenzie Academy. I have attended a 9 month program heavily focused on research, teamwork, and code proficiency. Although I am a relatively new Developer, I believe my future in the field will be a bright one. My goal is to be the best teammate i can be.</p>
      <h6><u>As a Person</u></h6>
      <p style={{textAlign:'left'}}>I think most people would describe me as a calm, level-headed person. I live in Lapeer, Michigan with my girlfriend and our 2 dogs. I enjoy fishing, gaming, and just about everything else as long as there is a social aspect involved.</p>
</Container>
  );
}

export default About;
