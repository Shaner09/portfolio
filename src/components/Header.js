import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Figure, Dropdown } from "react-bootstrap";
import useProvideData from "../useData";

function Header() {
  const { state, changeDisplayedSection } = useProvideData();
  return (
    <Navbar
      style={{ background: "#355e3b", color: "white"}}
      bg="header"
      expand="lg"
    >
      <Dropdown>
        <Dropdown.Toggle
          style={{ color: "white", background: "#355e3b", border: "none", paddingRight:'0px'}}
        >
          Sections
        </Dropdown.Toggle>
        <Dropdown.Menu style={{background:'#F5F8DE'}}>
          {state.sections.map((section) => (
            <Dropdown.Item onClick={() => changeDisplayedSection(section)}>
              {section}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
        <div style={{ color: "white", fontSize: "16px", paddingRight:'10px', paddingLeft:'0px'}}>
          <u>shanerichter09@yahoo.com</u>
        </div>
    </Navbar>
  );
}

export default Header;
