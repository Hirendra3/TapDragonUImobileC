import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MainScreen from './container/mainScreen/MainScreen'
import HomePage from '../src/container/homeFolder/HomePage'
import MineScreen from '../src/container/mineFolder/MineScreen'
import PlayScreen from '../src/container/playFolder/PlayScreen'
import ReferScreen from '../src/container/referFolder/ReferScreen'
import TaskScreen from '../src/container/taskFolder/TaskScreen'
import BottomNavigationBar from '../src/container/bottomNavigationBar/BottomNavigationBar'
import HeaderMenues from '../src/container/headerMenues/HeaderMenues'
import HeaderTopMenue from "../src/container/headerMenues/HeaderTopMenue"

function App() {
  return (
    <>
  
     
<div className='container'>
  <HeaderTopMenue />
</div>
       
     <Router>
      <Routes>
   
         <Route path="/" element={<HomePage />} />  
        <Route path="/mine" element={<MineScreen />} />
         <Route path="/play" element={<PlayScreen />} />
        <Route path="/refer" element={<ReferScreen />} />
        <Route path="/task" element={<TaskScreen />} /> 
      </Routes>
      <BottomNavigationBar />
    </Router>
   
    </>
  );
}

export default App;
