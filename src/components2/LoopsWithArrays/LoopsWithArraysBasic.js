import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function LoopsWithArraysBasic(props) {
  const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
  const [LWAarray, setLWAarray] = useState([469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472])
  const [display,setDisplay] = useState(false)

  const filterAll = (array) => {
    if (Array.isArray(array)) {
    return array
  }
  return null
  }

  const filterEven = (array) => {
    if (Array.isArray(array)) {
    return array.filter((number)=>number%2===0)
  }
  return null
  }

  const filterOdd = (array) => {
    if (Array.isArray(array)) {
    return array.filter((number)=>number%2===1)
  }
  return null
  }

  const filter8 = (array) => {
    if (Array.isArray(array)) {
    return array.filter((number)=>number%8===0)
  }
  return null
  }

  const mapSquared = (array) => {
    if (Array.isArray(array)) {
    return array.map((number)=>number**2)
  }
  return null
  }

  const getTotal = (array) => {
    if (Array.isArray(array)) {
      let total = 0
      for (let i=0; i<array.length; i+=1) {
        total+=array[i]
      }
      return total
  }
  return null
  }

  const getSmallest = (array) => {
    if (Array.isArray(array)) {
      let smallest = array[0]
      for (let i=0; i<array.length; i+=1) {
        if (array[i]<smallest) {
          smallest=array[i]
        }
      }
      return smallest
  }
  return null
  }

  const getBiggest = (array) => {
    if (Array.isArray(array)) {
      let biggest = array[0]
      for (let i=0; i<array.length; i+=1) {
        if (array[i]>biggest) {
          biggest=array[i]
        }
      }
      return biggest
  }
  return null
  }


  useEffect(() => {
    console.assert(JSON.stringify(filterAll(sampleArray)) === JSON.stringify(sampleArray), "expected filterAll(samplearray) to equal samplearray");
    console.assert(filterAll('abc')===null,"expected filterAll('abc') to equal null")

    console.assert(JSON.stringify(filterEven(sampleArray)) === JSON.stringify([244, 758, 450, 302, 20, 712, 456, 398, 882, 848, 940, 472]), `expected filterEven(samplearray) to return only even numbers. instead got ${filterEven(sampleArray)}`);
    console.assert(filterEven('abc')===null,"expected filterEven('abc') to equal null")

    console.assert(JSON.stringify(filterOdd(sampleArray)) === JSON.stringify([469, 755, 245, 71, 21, 339, 179, 535]), `expected filterOdd(samplearray) to return only odd numbers. instead got ${filterOdd(sampleArray)}`);
    console.assert(filterOdd('abc')===null,"expected filterOdd('abc') to equal null")

    console.assert(JSON.stringify(filter8([8, 2, 1, 17, 24])) === JSON.stringify([8, 24]), `expected filter8([8, 2, 1, 17, 24]) to return only numbers divisible by 8. instead got ${filter8([8, 2, 1, 17, 24])}`);
    console.assert(filter8('abc')===null,"expected filter8('abc') to equal null")

    console.assert(JSON.stringify(mapSquared([8, 2, 1, 17, 24])) === JSON.stringify([64, 4, 1,289, 576]), `expected mapSquared([8, 2, 1, 17, 24]) to return only numbers divisible by 8. instead got ${mapSquared([8, 2, 1, 17, 24])}`);
    console.assert(mapSquared('abc')===null,"expected mapSquared('abc') to equal null")

    console.assert(getTotal([8, 2, 1, 17, 24]) === 52, `expected getTotal([8, 2, 1, 17, 24]) to return 52. instead got ${getTotal([8, 2, 1, 17, 24])}`);
    console.assert(getTotal('abc')===null,"expected getTotal('abc') to equal null")

    console.assert(getSmallest(sampleArray) === 20, `expected getSmallest(samplearray) to return 20. instead got ${getSmallest(sampleArray)}`);
    console.assert(getSmallest('abc')===null,"expected getSmallest('abc') to equal null")

    console.assert(getBiggest(sampleArray) === 940, `expected getBiggest(samplearray) to return 940. instead got ${getBiggest(sampleArray)}`);
    console.assert(getBiggest('abc')===null,"expected getBiggest('abc') to equal null")
    //console.assert(displayAll(2, 2) == 4, "expected add(2,2) to equal 4");
  });
  return <div>

    <h1 onClick={()=>setDisplay(!display)} style={{cursor:'pointer'}}><u>Basic</u></h1>

    {display? <div style={{display:'flex', flexDirection:'column'}}>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(filterAll(sampleArray))}>Display the origional array</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(filterEven(sampleArray))}>Display all even numbers in the array</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(filterOdd(sampleArray))}>Display all odd numbers in the array</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(filter8(sampleArray))}>Display all numbers that are divisible by 8 in the array</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(mapSquared(sampleArray))}>Display all numbers in the array squared</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(getTotal(sampleArray))}>Display all numbers in the array added together(total)</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(getSmallest(sampleArray))}>Display smallest number in the array</Button>
    <Button style={{margin:'5px'}} onClick={()=>setLWAarray(getBiggest(sampleArray))}>Display biggest number in the array</Button>

    <div style={{border:"5px solid #355e3b", borderRadius:'10px'}}>
    <h3>Results:</h3>
    <div>{Array.isArray(LWAarray) ? LWAarray.join(', ') : LWAarray}</div></div>
    </div>
    : null}
    </div>;
}

export default LoopsWithArraysBasic;
