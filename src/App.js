import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import TechnicalSkills from './components/TechnicalSkills';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Protfolio';
import useProvideData from './useData';

function App() {
  const {state} = useProvideData()
  return (
    <div className="App" >
          <Header></Header>
          <Intro></Intro>
          {state.displayedSections==='All' || state.displayedSections==='Technical Skills'? <TechnicalSkills></TechnicalSkills> : null}
          {state.displayedSections==='All' || state.displayedSections==='About Me'? <About></About> : null}
          {state.displayedSections==='All' || state.displayedSections==='Links'? <Resume></Resume> : null}
          {state.displayedSections==='All' || state.displayedSections==='Portfolio'? <Portfolio></Portfolio> : null}
    </div>
  );
}

export default App;
