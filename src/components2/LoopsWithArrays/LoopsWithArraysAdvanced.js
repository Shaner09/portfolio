import React, { useEffect, useState } from "react";

function LoopsWithArraysAdvanced(props) {
  const [display,setDisplay] = useState(false)
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

  //#region -----------------Part 1-----------------
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
      let total = array.reduce((prev,curr)=>prev+curr)
      return total
  }
  return null
  }

  const getSmallest = (array) => {
    if (Array.isArray(array)) {
      return array.sort((a,b)=>a-b)[0]
  }
  return null
  }

  const getBiggest = (array) => {
    if (Array.isArray(array)) {
      return array.sort((a,b)=>b-a)[0]
  }
  return null
  }

  const filter3 = () => {
    let counter = 0
    let array = []
      let func3 = () => {
        if (counter%3===0 && counter!==0) {
          array.push(counter)
        }
        counter+=1
        if (counter<=101) {
          func3()
        }
      }
      func3()
      return array
  }

  const filter7 = () => {
    let counter = 0
    let array = []
      let func3 = () => {
        if (counter%7===0 && counter!==0) {
          array.push(counter)
        }
        counter+=1
        if (counter<=101) {
          func3()
        }
      }
      func3()
      return array
}

  const add3And7 = () => {
    let array1 = filter7().concat(filter3()).sort((a,b)=>b-a)
    let array2 = array1.filter((number,i)=>i===array1.indexOf(number))
    return array2
  }

  const filter5Odd = () => {
    let counter = 0
    let array = []
      let func3 = () => {
        if (counter%10===5 && counter!==0) {
          array.push(counter)
        }
        counter+=1
        if (counter<=101) {
          func3()
        }
      }
      func3()
      return array
}

const getTotal2 = () => {
  let counter = 0
  let total=0
    let func3 = () => {
        total+=counter
      counter+=1
      if (counter<=20) {
        func3()
      }
    }
    func3()
    return total
}

  const getNumbersInInterval = (a,b) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
      let counter = a
      let func3 = () => {
        array.push(counter)
        counter+=1
        if (counter<=b) {
          func3()
        }
      }
      func3()
    return array
  }
  return null
  }

  const getNumbersInIntervalDesc = (a,b) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    let counter = b
      let func3 = () => {
        array.push(counter)
        counter-=1
        if (counter>=a) {
          func3()
        }
      }
      func3()
    return array
  }
  return null
  }

  const getNegNumbersInIntervalAsc = (b,a) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    let counter = b
      let func3 = () => {
        array.push(counter)
        counter+=1
        if (counter<=a) {
          func3()
        }
      }
      func3()
    return array
  }
  return null
  }

  const getNegNumbersInIntervalDesc = (b,a) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    let counter = a
      let func3 = () => {
        array.push(counter)
        counter-=1
        if (counter>=b) {
          func3()
        }
      }
      func3()
    return array
  }
  return null
  }

  const getOddNegAndPosNumbersInIntervalDesc = (b,a) => {
    let array = []
    if (typeof a==='number' && typeof b ==='number') {
    let counter = a
      let func3 = () => {
        if (Math.abs(counter%2)===1) {
          array.push(counter)
        }
        counter-=1
        if (counter>=b) {
          func3()
        }
      }
      func3()
    return array
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

    console.assert(JSON.stringify(filter3()) === JSON.stringify([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]), `expected filter3() to return all numbers 0-100 divisible by 3. instead got ${filter3()}`);

    console.assert(JSON.stringify(filter7()) === JSON.stringify([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]), `expected filter7() to return all numbers 0-100 divisible by 7. instead got ${filter7()}`);

    console.assert(JSON.stringify(add3And7()) === JSON.stringify([99, 98, 96, 93, 91, 90, 87, 84, 81, 78, 77, 75, 72, 70, 69, 66, 63, 60, 57, 56, 54, 51, 49, 48, 45, 42, 39, 36, 35, 33, 30, 28, 27, 24, 21, 18, 15, 14, 12, 9, 7, 6, 3]), `expected add3And7() to return all numbers 0-100 divisible by 7 or 3 in descending order. instead got ${add3And7()}`);

    console.assert(JSON.stringify(filter5Odd()) === JSON.stringify([5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), `expected filter5Odd() to return all odd numbers 0-100 divisible by 5. instead got ${filter5Odd()}`);

    console.assert(getTotal2() === 210, `expected getTotal2() to return 210. instead got ${getTotal2()}`);

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
  //#endregion -----------------Part 1-----------------

  const make20 = () => {
    return array.map((number)=><div key={number} style={{background:'blue',height:'20px', width:`100px`,margin:'2px'}}>{number}</div>)
  }

  const make20IncWidth = () => {
    let vari=100
    return array.map((number,i)=>{
    vari+=5
    return <div key={number} style={{background:'blue',height:'20px', width:`${vari}px`,margin:'2px'}}>{number}, {vari}</div>})
  }

  const make20SampWidth = () => {
    return sampleArray.map((number,i)=>{
    return <div key={i+1} style={{background:'blue',height:'20px', width:`${number}px`,margin:'2px'}}>{i+1}, {number}</div>})
  }

  const make20EOOrange = () => {
    return sampleArray.map((number,i)=>{
    return <div key={i+1} style={{background:i%2===1?'blue' : 'orange',height:'20px', width:`${number}px`,margin:'2px'}}>{i+1}, {number}</div>})
  }

  const make20EvenOrange = () => {
    return sampleArray.map((number,i)=>{
    return <div key={i+1} style={{background:number%2===1?'blue' : 'orange',height:'20px', width:`${number}px`,margin:'2px'}}>{i+1}, {number}</div>})
  }


  return <div>

    <h1 onClick={()=>setDisplay(!display)} style={{cursor:'pointer'}}><u>Advanced</u></h1>
    {display? <div style={{display:'flex', flexDirection:'column'}}>
    <h3><u>Part 1</u></h3>
    <p>Part 1 is in the src/components/LoopsWithArrays/LoopsWithArraysAdvanced.js file.</p>
    <h3><u>Part 2</u></h3>
    -------Challenge 1-------{make20()}
    -------Challenge 2-------{make20IncWidth()}
    -------Challenge 3-------{make20SampWidth()}
    -------Challenge 4-------{make20EOOrange()}
    -------Challenge 5-------{make20EvenOrange()}
</div> : null
}
    
    </div>;
}

export default LoopsWithArraysAdvanced;
