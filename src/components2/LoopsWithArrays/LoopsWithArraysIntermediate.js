import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function LoopsWithArraysIntermediate(props) {
  const {LWAIarray, changeLWAIarray} = useState([])
  const [display,setDisplay] = useState(false)

  const filter3 = () => {
      let array = []
      for (let i=0; i<=100; i+=1) {
        if (i%3===0 && i!==0) {
          array.push(i)
        }
      }
      return array
  }

  const filter7 = () => {
    let array = []
    for (let i=0; i<=100; i+=1) {
      if (i%7===0 && i!==0) {
        array.push(i)
      }
    }
    return array
}
  const add3And7 = () => {
    let combinedArray=filter7().concat(filter3())
    let array = []
    let newArray = []
    for (let i=0; i<=100; i+=1) {
        array.push('-')
      }
    for (let i=0; i<combinedArray.length; i+=1) {
      array[combinedArray[i]]=combinedArray[i]
    }
    for (let i=array.length-1; i>0; i-=1) {
      if (array[i]!=='-') {
        newArray.push(array[i])
      }
    }
    return newArray
  }

  const filter5Odd = () => {
    let array = []
    for (let i=0; i<=100; i+=1) {
      if (i%10===5 && i!==0) {
        array.push(i)
      }
    }
    return array
  }

  const getTotal = () => {
    let total = 0
    for (let i=0; i<=20; i+=1) {
        total+=i
    }
    return total
  }

  const getNumbersInInterval = (a,b) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    for (let i=a; i<=b; i+=1) {
        array.push(i)
    }
    return array
  }
  return null
  }

  const getNumbersInIntervalDesc = (a,b) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    for (let i=b; i>=a; i-=1) {
        array.push(i)
    }
    return array
  }
  return null
  }

  const getNegNumbersInIntervalAsc = (b,a) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    for (let i=b; i<=a; i+=1) {
        array.push(i)
    }
    return array
  }
  return null
  }

  const getNegNumbersInIntervalDesc = (b,a) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    for (let i=a; i>=b; i-=1) {
        array.push(i)
    }
    return array
  }
  return null
  }

  const getOddNegAndPosNumbersInIntervalDesc = (b,a) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    for (let i=a; i>=b; i-=1) {
      if (Math.abs(i%2)===1) {
        array.push(i)
      }
    }
    return array
  }
  return null
  }



  useEffect(() => {
    //I have chosen to use only one unit test for the functions that do not take a parameter as they have the same expected output no matter how you call them, and if that output is incorrect, that is all I need to know.
    console.assert(JSON.stringify(filter3()) === JSON.stringify([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]), `expected filter3() to return all numbers 0-100 divisible by 3. instead got ${filter3()}`);

    console.assert(JSON.stringify(filter7()) === JSON.stringify([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]), `expected filter7() to return all numbers 0-100 divisible by 7. instead got ${filter7()}`);

    console.assert(JSON.stringify(add3And7()) === JSON.stringify([99, 98, 96, 93, 91, 90, 87, 84, 81, 78, 77, 75, 72, 70, 69, 66, 63, 60, 57, 56, 54, 51, 49, 48, 45, 42, 39, 36, 35, 33, 30, 28, 27, 24, 21, 18, 15, 14, 12, 9, 7, 6, 3]), `expected add3And7() to return all numbers 0-100 divisible by 7 or 3 in descending order. instead got ${add3And7()}`);

    console.assert(JSON.stringify(filter5Odd()) === JSON.stringify([5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), `expected filter5Odd() to return all odd numbers 0-100 divisible by 5. instead got ${filter5Odd()}`);

    console.assert(getTotal() === 210, `expected getTotal() to return 210. instead got ${getTotal()}`);

    console.assert(JSON.stringify(getNumbersInInterval(1,6)) === JSON.stringify([1, 2, 3, 4, 5, 6]), `expected getNumbersInInterval(1,6) to return [1, 2, 3, 4, 5, 6]. instead got ${getNumbersInInterval(1,6)}`);
    console.assert(getNumbersInInterval(1,'a') === null, `expected getNumbersInInterval(1,'a') to return null. instead got ${getNumbersInInterval(1,'a')}`);

    console.assert(JSON.stringify(getNumbersInIntervalDesc(1,6)) === JSON.stringify([6, 5, 4, 3, 2, 1]), `expected getNumbersInIntervalDesc(1,6) to return [6, 5, 4, 3, 2, 1]. instead got ${getNumbersInIntervalDesc(1,6)}`);
    console.assert(getNumbersInIntervalDesc(1,'a') === null, `expected getNumbersInIntervalDesc(1,'a') to return null. instead got ${getNumbersInIntervalDesc(1,'a')}`);

    console.assert(JSON.stringify(getNegNumbersInIntervalAsc(-6,-1)) === JSON.stringify([-6, -5, -4, -3, -2, -1]), `expected getNegNumbersInIntervalAsc(-6,-1) to return [-6, -5, -4, -3, -2, -1]. instead got ${getNegNumbersInIntervalAsc(-6,-1)}`);
    console.assert(getNegNumbersInIntervalAsc(1,'a') === null, `expected getNegNumbersInIntervalAsc(1,'a') to return null. instead got ${getNegNumbersInIntervalAsc(1,'a')}`);

    console.assert(JSON.stringify(getNegNumbersInIntervalDesc(-6,-1)) === JSON.stringify([-1, -2, -3, -4, -5, -6]), `expected getNegNumbersInIntervalDesc(-6,-1) to return [-1, -2, -3, -4, -5, -6]. instead got ${getNegNumbersInIntervalDesc(-6,-1)}`);
    console.assert(getNegNumbersInIntervalDesc(1,'a') === null, `expected getNegNumbersInIntervalAsc(1,'a') to return null. instead got ${getNegNumbersInIntervalAsc(1,'a')}`);

    console.assert(JSON.stringify(getOddNegAndPosNumbersInIntervalDesc(-6,6)) === JSON.stringify([5, 3, 1, -1, -3, -5]), `expected getOddNegAndPosNumbersInIntervalDesc(-6,6) to return [-5, -3, -1, 1, 3, 5]. instead got ${getOddNegAndPosNumbersInIntervalDesc(-6,6)}`);
    console.assert(getOddNegAndPosNumbersInIntervalDesc(1,'a') === null, `expected getOddNegAndPosNumbersInIntervalDesc(1,'a') to return null. instead got ${getOddNegAndPosNumbersInIntervalDesc(1,'a')}`);
  });
  return <div>

    <h1 onClick={()=>setDisplay(!display)} style={{cursor:'pointer'}}><u>Intermediate</u></h1>
    {display? <div style={{display:'flex', flexDirection:'column'}}>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(filter3())}>Display all numbers divisible by 3 from 0-100</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(filter7())}>Display all numbers divisible by 7 from 0-100</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(add3And7())}>Display all numbers divisible by 7 or 3 from 0-100 in descending order</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(filter5Odd())}>Display all odd jumbers divisible by 5 from 0-100 in ascending order</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(getTotal())}>Display the total of all numbers 1-20</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(getNumbersInInterval(1,10))}>Display all integers within 1 and 10 in ascending order.</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(getNumbersInIntervalDesc(1,10))}>Display all integers within 1 and 10 in descending order.</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(getNegNumbersInIntervalAsc(-10,-1))}>Display all integers within -1 and -10 in ascending order.</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(getNegNumbersInIntervalDesc(-10,-1))}>Display all integers within -1 and -10 in descending order.</Button>
    <Button style={{margin:'5px'}} onClick={()=>changeLWAIarray(getOddNegAndPosNumbersInIntervalDesc(-10,10))}>Display all integers within 10 and -10 in descending order.</Button>

    <div style={{border:"5px solid #355e3b", borderRadius:'10px'}}>
    <h3>Results:</h3>
    <div>{Array.isArray(LWAIarray) ? LWAIarray.join(', ') : LWAIarray}</div></div></div> : null
}
    
    </div>;
}

export default LoopsWithArraysIntermediate;
