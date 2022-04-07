import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Figure, Image, Row, Col } from 'react-bootstrap'

function Resume() {
  return (
    <div className="Links invis">
      <div className="title"><div>Links:</div><span className="blinker">|</span></div>
    <div className="section" style={{width:"90vw"}}>
      <div><a href={'https://github.com/Shaner09'}>Github profile</a></div>
      <div><a href='resume.pdf'>Resume</a></div>
</div>
</div>
  );
}

export default Resume;
