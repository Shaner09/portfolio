import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TechnicalSkills from "./components/TechnicalSkills";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import useProvideData from "./useData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arithmetic from "./components2/Arithmetic/arithmetic";
import LoopsWithArraysBasic from "./components2/LoopsWithArrays/LoopsWithArraysBasic";
import LoopsWithArraysIntermediate from "./components2/LoopsWithArrays/LoopsWithArraysIntermediate";
import LoopsWithArraysAdvanced from "./components2/LoopsWithArrays/LoopsWithArraysAdvanced";
import TicTacToe from "./components2/TicTacToe/ticTacToe";
import PigLatin from "./components2/PigLatin/PigLatin";
import Header2 from "./components2/Header";
import Resume2 from "./components2/Resume/Resume";

function App() {
  const { state } = useProvideData();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header></Header>
              <Intro></Intro>
              <TechnicalSkills></TechnicalSkills>
              {/* <About></About> */}
              {/* <Resume></Resume> */}
              <Portfolio></Portfolio>
            </div>
          }
        />

        <Route path="/challenges/arithmetic" element={<div><Header2/><Arithmetic /></div>} />
        <Route path="/challenges/loops" element={<div><Header2/><LoopsWithArraysBasic/><LoopsWithArraysIntermediate/><LoopsWithArraysAdvanced/></div>} />
        <Route path="/challenges/" element={<div><Header2/><TicTacToe /></div>} />
        <Route path="/challenges/piglatin" element={<div><Header2/><PigLatin /></div>} />
        <Route path="/challenges/resume" element={<div><Header2/><Resume2 /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
