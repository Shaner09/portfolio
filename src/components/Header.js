import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import { Navbar, Nav, Button, Figure, Dropdown } from "react-bootstrap";
import useProvideData from "../useData";

function Header() {
  const { state, changeDisplayedSection } = useProvideData();

  const scroll = (componentString) => {
    const component = document.querySelector(`.${componentString}`)
    window.scrollTo({top:component.offsetTop-window.innerHeight/10, behavior:"smooth"})
  }

  return (
    <div style={{height:"10vh"}}>
    <Navbar
      style={{ background: "#355e3b", color: "white", height:"10vh", paddingLeft:'3vw', borderBottom:"3px solid black", borderBottomLeftRadius:"5px", borderBottomRightRadius:"5px", display: "flex", justifyContent:"space-between"}}
      bg="header"
      expand="lg"
      fixed="top"
    >
        <div style={{ color: "white", fontSize: "16px", padding:'0px'}}>
          <u>shanerichter09@gmail.com</u>
        </div>
        <Dropdown style={{paddingRight:"3vw"}}>
        <Dropdown.Toggle
          style={{ color: "white", background:"#355e3b", border: "2px solid white", padding:'5px'}}
        >
          Sections
        </Dropdown.Toggle>
        <Dropdown.Menu style={{background:'#F5F8DE'}} align="end">
          {state.sections.map((section, index) => (
            <span key={index}>
              {index!==0 && <Dropdown.Divider style={{margin:"0px"}}/>}
            <Dropdown.Item onClick={() => scroll(section.split(" ")[0])} style={{textAlign:"center"}}>
              {section}
            </Dropdown.Item>
            </span>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
    </div>
  );
}

export default Header;
