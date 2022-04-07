import React, { useEffect, useState} from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function Arithmetic(props) {
  const [userText, setUserText] = useState("");
  const [userText2, setUserText2] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange2 = (event) => {
    if (parseInt(event.target.value)%1 ===0) {
      setUserText2(parseInt(event.target.value));
    } else {
      setUserText2('');
    }
  };

  const handleInputChange = (event) => {
    if (parseInt(event.target.value)%1 ===0) {
      setUserText(parseInt(event.target.value));
    } else {
      setUserText('');
    }
  };


  const add = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    return null;
  };

  const multiply = (a, b) => {
    let total = 0;
    if (
      typeof a === "number" &&
      typeof b === "number" &&
      a >= 0 &&
      b >= 0 &&
      !String(a).includes(".") &&
      !String(b).includes(".")
    ) {
      for (let i = 0; i < b; i = add(i, 1)) {
        total = add(total, a);
      }
      return total;
    }
    return null;
  };

  const power = (a, b) => {
    let total = 1;
    if (
      typeof a === "number" &&
      typeof b === "number" &&
      a >= 0 &&
      b >= 0 &&
      !String(a).includes(".") &&
      !String(b).includes(".")
    ) {
      for (let i = 0; i < b; i = add(i, 1)) {
        total = multiply(total, a);
      }
      return total;
    }
    return null;
  };

  const factorial = (a) => {
    let total = 1;
    if (typeof a === "number" && a >= 0 && !String(a).includes(".")) {
      for (let i = 1; i <= a; i = add(i, 1)) {
        total = multiply(total, i);
      }
      return total;
    }
    return null;
  };

  const fibonacci = (a) => {
    //0,1,1,2,3,5,8,13
    if (typeof a === "number" && a > 0 && !String(a).includes(".")) {
      let first = 0;
      let second = 1;
      for (let i = 1; i < a; i = add(i, 1)) {
        let third = add(first, second);
        first = second;
        second = third;
      }
      return first;
    }
    return null;
  };

  useEffect(() => {
    console.assert(add(2, 2) === 4, "expected add(2,2) to equal 4");
    console.assert(add(2, -2) === 0, "expected add(2,-2) to equal 0");
    console.assert(add("a", 2) === null, "expected add(a,2) to equal null");
    console.assert(multiply(2, 2) === 4, "expected multiply(2,2) to equal 4");
    console.assert(multiply(2, 0) === 0, "expected multiply(2,0) to equal 0");
    console.assert(multiply(0, 2) === 0, "expected multiply(0,2) to equal 0");
    console.assert(
      multiply("a", 2) === null,
      "expected multiply(a,2) to equal null"
    );
    console.assert(
      multiply(-2, 2) === null,
      "expected multiply(-2,2) to equal null"
    );
    console.assert(power(2, 3) === 8, "expected power(2,2) to equal 8");
    console.assert(power(2, -2) === null, "expected power(2,-2) to equal null");
    console.assert(power(2, 0) === 1, "expected power(2,0) to equal 1");
    console.assert(factorial(5) === 120, "expected factorial(5) to equal 120");
    console.assert(factorial(1) === 1, "expected factorial(1) to equal 1");
    console.assert(factorial(0) === 1, "expected factorial(0) to equal 1");
    console.assert(fibonacci(0) === null, "expected fibonaccci(0) to equal null, as there is no 0th entry if we are told to beleive the 8th entry is 13.");
    console.assert(fibonacci(8) === 13, "expected fibonacci(8) to equal 13");
    console.assert(fibonacci(1) === 0, "expected fibonacci(1) to equal 0");
  });
  return <div>Below is a calculator made using a single + math operator(no %,**,*,-,or /), and loops and methods.
    <div>Input numbers in the text fields below and then click the operation that you would like to perform.</div>
    <InputGroup>
        <Form.Control
          type="text"
          name="userText"
          placeholder="input for: a"
          aria-describedby="inputGroupPrepend"
          value={userText}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          name="userText2"
          placeholder="input for: b"
          aria-describedby="inputGroupPrepend"
          value={userText2}
          onChange={handleInputChange2}
        />
      </InputGroup>
      <Button style={{margin:'5px'}} onClick={()=>setOutput(add(userText,userText2))}>a + b</Button>
      <Button style={{margin:'5px'}} onClick={()=>setOutput(multiply(userText,userText2))}>a x b</Button>
      <Button style={{margin:'5px'}} onClick={()=>setOutput(power(userText,userText2))}>a ^ b</Button>
      <Button style={{margin:'5px'}} onClick={()=>setOutput(factorial(userText))}>a!</Button>
      <Button style={{margin:'5px'}} onClick={()=>setOutput(fibonacci(userText))}>find the (a)th entry in the fibonacci sequence</Button>
      <div>{Array.isArray(output) ? output.join(', ') : output}</div>
  </div>;
}

export default Arithmetic;
