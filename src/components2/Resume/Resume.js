import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function Resume(props) {
  return (
    <div>resume
      <button onClick={()=>window.location.href = 'resume.pdf'}>open</button>
      <div><a href='resume.pdf'>Resume</a></div>
    </div>
  );
}

export default Resume;
