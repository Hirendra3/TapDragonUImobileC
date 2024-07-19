import React, { useState, useEffect, useRef } from 'react';
import TOKcoin2 from "../../assets/img/profile-icon.png"
import GameLevelBar from "../gameLevel/gameLevelBar"
import setting from "../../assets/img/setting.png"
import binance from "../../assets/img/binance.png"
import dollarcoin from "../../assets/img/dollarcoin.png"


const HeaderMenues = () => {

  return (
    <>


      <div className='container'>
      <div className='containerBox'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='HeaderMenues-box'>
              <span><img className='TOKcoin2' src={TOKcoin2} alt='TOKcoin2' /></span>
              <span>Player's Name</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6' style={{padding:'0'}}>
            <div className='HeaderMenues-box'>
              <p>Level 1</p>
              <span className='biFxd'>
               
              <span className='biFxd2'>
                cccccccccccccc
                </span>
              </span>
            </div>
          </div><div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6' style={{padding:'0'}}>
            <div className='HeadeueSlides'>
              <div className='dWxsign'>
              <div className='dixBlk' style={{borderRight:'1px solid #fff'}}><span><img className='TOKcoin4' src={binance} alt='binance' /></span></div>
              <div className='dixBlk dOmBoxify'><span>Profit Per Hour</span>
              <span><img className='TOKcoin4' src={dollarcoin} alt='dollarcoin' />0.00</span></div>
              <div className='dixBlk' style={{borderLeft:'1px solid #fff'}}><span><img className='TOKcoin4' src={setting} alt='setting' /></span></div>
              
               
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>

    </>
  );
};

export default HeaderMenues;


