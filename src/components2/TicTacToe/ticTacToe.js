import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  Form,
  Button,
  Container,
} from "react-bootstrap";

function TicTacToe(props) {
  const [board, setBoard] = useState([
    ["empty", "empty", "empty"],
    ["empty", "empty", "empty"],
    ["empty", "empty", "empty"],
  ]);

  const [isPlayer1, setIsPlayer1] = useState(true);
  const [winner, setWinner] = useState(true);
  const [isSinglePlayer, setIsSinglePlayer] = useState(true);
  const [player1Wins, setPlayer1Wins] = useState(0)
  const [player2Wins, setPlayer2Wins] = useState(0)
  const [draws, setDraws] = useState(0)

  useEffect(() => {
    let ob1 = createObject()
    let winner1 = checkwin(ob1)
    setWinner(winner1);
    if (isSinglePlayer && !isPlayer1 && !winner1[0]) {
      let board1 = board.map((column) => column.map((row) => row));
      let aiMove = ai(ob1)
      board1[aiMove[0]][aiMove[1]] = "green";
      setBoard(board1);
      setIsPlayer1(true);
    }
  }, [board]);

  //1g=2  1r=2  2g=1000 2r=100 3e=1 1r1g=0 
  const ai = (ob) => {
    let emptyArray=(getEmptyBoxes())
    emptyArray = emptyArray.map((option)=>{
      let counter=0
      for (let combo in ob) {
        ob[combo].list.forEach((box)=>{
          if (box.x===option.x && box.y===option.y) {
            counter+=ob[combo].points
          }
        })
      }
      return {x:option.x,y:option.y,points:counter}
    })
    emptyArray = emptyArray.sort((a,b)=>b.points-a.points)
    return [emptyArray[0].x,emptyArray[0].y]
  }
  const createObject = () => {
    let ob = {leftCol:{list:[{color:board[0][0],x:0,y:0},{color:board[0][1],x:0,y:1},{color:board[0][2],x:0,y:2}]}
    ,midCol:{list:[{color:board[1][0],x:1,y:0},{color:board[1][1],x:1,y:1},{color:board[1][2],x:1,y:2}]}
    ,rightCol:{list:[{color:board[2][0],x:2,y:0},{color:board[2][1],x:2,y:1},{color:board[2][2],x:2,y:2}]}
    ,bottomRow:{list:[{color:board[0][0],x:0,y:0},{color:board[1][0],x:1,y:0},{color:board[2][0],x:2,y:0}]}
    ,midRow:{list:[{color:board[0][1],x:0,y:1},{color:board[1][1],x:1,y:1},{color:board[2][1],x:2,y:1}]}
    ,topRow:{list:[{color:board[0][2],x:0,y:2},{color:board[1][2],x:1,y:2},{color:board[2][2],x:2,y:2}]}
    ,asc:{list:[{color:board[0][0],x:0,y:0},{color:board[1][1],x:1,y:1},{color:board[2][2],x:2,y:2}]}
    ,desc:{list:[{color:board[0][2],x:0,y:2},{color:board[1][1],x:1,y:1},{color:board[2][0],x:2,y:0}]}}

    for (let combo in ob) {
      let colors = JSON.stringify(ob[combo].list.map((box)=>box.color).sort())
      if(colors==='["empty","green","green"]') {
        ob[combo].points=100
      }
      if(colors==='["empty","red","red"]') {
        ob[combo].points=20
      }
      if(colors==='["empty","empty","red"]') {
        ob[combo].points=3
      }
      if(colors==='["empty","empty","green"]') {
        ob[combo].points=2
      }
      if(colors==='["empty","empty","empty"]') {
        ob[combo].points=1
      }
      if(colors==='["empty","green","red"]') {
        ob[combo].points=0
      }
    }
    return ob
  }

  const checkwin = (object1) => {
    let winner = [false, ""];
    let counter = 0
    for (let combo in object1) {
      let string =JSON.stringify(object1[combo].list.map((box)=>box.color))
      winner = string==='["red","red","red"]' ? [true,'red'] : winner
      winner = string==='["green","green","green"]' ? [true,'green'] : winner
      counter += string.includes("empty") ? 1 : 0
    }
    winner = counter === 0 && !winner[0] ? [true, ""] : winner
    if (winner[0]) {
      if (winner[1]==='red') {
        setPlayer1Wins(player1Wins+1)
      } else if (winner[1]==='green') {
        setPlayer2Wins(player2Wins+1)
      } else {
        setDraws(draws+1)
      }
    }
    return winner;
  };

  const handleClick = (x, y) => {
    let board1 = board.map((column) => column.map((row) => row));
    if (!isSinglePlayer || (isSinglePlayer && isPlayer1)) {
      if (!winner[0]) {
        if (board1[x][y] === "empty") {
          isPlayer1 ? (board1[x][y] = "red") : (board1[x][y] = "green");
          setBoard(board1);
          setIsPlayer1(!isPlayer1);
        }
      }
    }
  };

  const getEmptyBoxes = () => {
    let newArray = []
    board.map((column, i) =>
        column.forEach((row, j) => {
          row === "empty" && newArray.push({ x: i, y: j });
        })
      );
      return newArray
  }




  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <span>Player 1 wins: {player1Wins}</span><span>Player 2 wins: {player2Wins}</span><span>Draws :{draws}</span>
        <Form.Check
          checked={isSinglePlayer}
          onChange={(e) => setIsSinglePlayer(e.currentTarget.checked)}
          type="checkbox"
          label="Single player"
        />
      {!winner[0] ? (
        <h1 style={{ textAlign: "center", color: isPlayer1 ? "red" : "green" }}>
          {isPlayer1 ? "Player 1" : "Player 2"}
        </h1>
      ) : (
        <h1 style={{ textAlign: "center", color: winner[1] }}>
          {winner[1] === "red" ? "Player 1 won" : winner[1] === '' ? "Tie Game" : "Player 2 won"}
        </h1>
      )}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          width: "300px",
          height: "300px",
        }}
      >
        {board.map((column, i) => (
          <div
            style={{
              padding: "0px",
              display: "flex",
              flexDirection: "column-reverse",
            }}
            key={i}
          >
            {column.map((row, j) => (
              <div
                onClick={() => handleClick(i, j)}
                key={`${i}, ${j}`}
                style={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  height: "100px",
                  fontSize:"80px",
                  width: "100px",
                  margin: "0px",
                  border: "5px solid black",
                }}
              >{row==="empty"? null : row==="red" ? <i style={{fontSize:"90px", display:"flex"}}><FaTimes/></i> : <i style={{border:"15px solid black",height:"76px", width:"76px", borderRadius:"40px"}}> </i>}</div>
            ))}
          </div>
        ))}
      </Container>
      <Button
        onClick={() => {
          setBoard([
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"],
          ]);
          setIsPlayer1(true);
          setWinner([false, ""]);
        }}
      >
        Reset board
      </Button>
    </div>
  );
}

export default TicTacToe;
