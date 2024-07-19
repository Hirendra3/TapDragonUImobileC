import React, { useState, useEffect, useRef } from 'react';
import tokamelogo from "../../assets/img/tokame-logo.png"
import leaftapper from "../../assets/img/leaftapper.png"
import bigex from "../../assets/img/2048.png"
import bubblesniper from "../../assets/img/bubblesniper.png"
import rightarrow from "../../assets/img/right-arrow.png"
import RandomCircle from "../dragonWorldPlay/PlaySectionFinal"
import comingSoon from "../../assets/img/comingSoon.png"
      
const PlayScreen = () => {
 
  return (
    <>
    <div className='blurrerScreen'>
      <span>
        <img src={comingSoon} alt='' />
      </span>
    </div>
   <div className='container mrGinBottom'>
   <div className='row' style={{justifyContent: "center"}}>
     {/* <div className='referNumber'>
            <img className='tokamelogo3' src={tokamelogo} alt="refer grey" />
          </div> */}
     <div className='wraper-mineScreen5'>
            <h4>Tap the Dragon</h4>
          </div>
        
      <div className="playNumberDragon">

<RandomCircle />

          {/* <ul>
          <li>
              <span><img className='playBubble' src={leaftapper} alt="leaftapper" /></span>
              <span><b>Leaf Tapper</b><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span></li>
            <li><span>
            <img className='playBubble' src={bubblesniper} alt="bubble sniper" />
              </span><span><b>Bubble Sniper</b>
              <b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span></li>
            <li>
              <span><img className='playBubble' src={bigex} alt="play" /></span>
              <span><b>2048</b><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span></li>           
          </ul> */}
      </div>
      </div>
      </div>
    </>
  );
};

export default PlayScreen;


