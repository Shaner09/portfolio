import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Dropdown} from 'react-bootstrap'
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    location.pathname!=="/a/resume" && <Navbar style={{background: '#355e3b',color:'white'}}bg='header' expand='lg'>
    <Navbar.Brand style={{margin:'auto'}}>
        <h2 style={{color:'white'}}>{location.pathname === "/challenges/" ? "Tic Tac Toe" : location.pathname==="/challenges/loops" ? "Loops With Arrays" : location.pathname==="/challenges/arithmetic" ? "Arithmetic" : location.pathname==="/challenges/piglatin" ?  "Pig Latin" : "Anagrams"}</h2>
    </Navbar.Brand>
    <Dropdown style={{marginRight:'5px'}}>
    <Dropdown.Toggle style={{color:'white', background:'#355e3b', border:'none'}}>
    Select Challenge
  </Dropdown.Toggle>
    <Dropdown.Menu align="end">
          <Dropdown.Item onClick={()=>navigate("/challenges/")}>Tic Tac Toe</Dropdown.Item>
          {/* <Dropdown.Item onClick={()=>navigate("/anagrams")}>Anagrams</Dropdown.Item> */}
          <Dropdown.Item onClick={()=>navigate("/challenges/loops")}>Loops With LoopsWithArrays</Dropdown.Item>
          <Dropdown.Item onClick={()=>navigate("/challenges/piglatin")}>Pig Latin</Dropdown.Item>
          <Dropdown.Item onClick={()=>navigate("/challenges/arithmetic")}>Arithmetic</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  </Navbar>
  );
}

export default Header;
