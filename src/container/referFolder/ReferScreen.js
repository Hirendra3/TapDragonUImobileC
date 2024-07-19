import React, { useState, useEffect, useRef } from 'react';
import invite from "../../assets/img/invite.png"
import gift from "../../assets/img/reward.png"
import copy2 from "../../assets/img/copy-2.png"


const ReferScreen = () => {

  return (
    <>
      <div className='container mrGinBottom'>
        <div className='row' style={{ justifyContent: "center" }}>

          <div className='wraper-mineScreen5'>
            <h3>Invite Friends !</h3>
            <span>You and your friend will receive bonuses</span>
          </div>
          <div className='referNumber'>
            <img src={invite} alt="refer grey" />
          </div>
          <div className="playNumber">
            <ul>
              <li><span>
                <img className='playBubble' src={gift} alt="play" />
              </span>
                <span><b>Invite A friend</b><b>Get 1000 TOK points</b></span></li>
              <li>
                <span><img className='playBubble' src={gift} alt="play" /></span>
                <span><b>Invite 3 of your friends</b><b>Get 4000 TOK points</b></span></li>
            </ul>
          </div>
          <div className="shareLinks">
            <div className='linksBtns'>
              <button className='shareLinksbtn'>
                Share the Link
              </button>
            </div>
            <div className='linksBtns Sherdsx'>
              <img className='playBubble' src={copy2} alt="play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferScreen;


