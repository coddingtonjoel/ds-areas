import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./home/Header";
import GameSection from './home/GameSection';
import SubmissionForm from './home/SubmissionForm';
import gameData from "./gameData.json";
import Area from "./area/Area";

// index route
const Homepage = () => (
  <div className="App">
    <Header/>
    <GameSection gameData={gameData}/>
    <SubmissionForm/>
  </div>
)

// router setup
const App = () => {
  const { dsI, dsII, dsIII } = gameData;
  const allAreas = [...dsI.locations, ...dsII.locations, ...dsIII.locations];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage}/>
        {/* create route for each area */}
        {allAreas.map(area => {
          return (
            <Route key={area.title} path={area.route} Component={() => <Area data={area.data} title={area.title}/>}/>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
