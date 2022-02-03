import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TechnicalSkills from "./components/TechnicalSkills";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Protfolio";
import useProvideData from "./useData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              <About></About>
              <Resume></Resume>
              <Portfolio></Portfolio>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
