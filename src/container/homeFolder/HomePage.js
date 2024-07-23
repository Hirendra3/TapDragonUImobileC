import React, { useState, useEffect, useRef } from 'react';
import Roulette from "../spinWheelFolder/roulette";
import HomePageOne from "./HomePageOne"
//import HomePageTwo from "./HomePageTwo"
import HeaderMenues from "../headerMenues/HeaderMenues"


const HomePage = () => {

  return (
    <>
      <div className='container mrGinBottom'>
        <div className='row' style={{ justifyContent: "center" }}>
          <HeaderMenues />
          <div className='spin-wheel-container'>
            <Roulette />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;


