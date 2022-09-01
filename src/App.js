import './App.css';
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/navbar/Navbar'
import SelectCreature from './pages/selectCreature/selectCreature'
// import SelectClassLevel from './pages/selectClassLevel/selectClassLevel'
// import CharacterSheet from './pages/characterSheet/characterSheet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route path="/" element={<SelectCreature/>}/>
          {/* <Route path="selectClassLevel" element={<SelectClassLevel/>}/>
          <Route path="characterSheet" element={<CharacterSheet/>}/> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
