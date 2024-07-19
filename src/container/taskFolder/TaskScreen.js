import React, { useState, useEffect, useRef } from 'react';
import task from "../../assets/img/task-3d.png"
import dailyRewrd from "../../assets/img/daily-reward.png"
import telegram from "../../assets/img/telegram.png"
import twitter from "../../assets/img/x.png"
import choose from "../../assets/img/choose.png"
import invite from "../../assets/img/invite.png"
import rightarrow from "../../assets/img/right-arrow.png"
import comingSoon from "../../assets/img/comingSoon.png"

const TaskScreen = () => {
 
  return (
    <>
      <div className='blurrerScreen'>
      <span>
        <img src={comingSoon} alt='' />
      </span>
    </div>
      <div className='container mrGinBottom'>
      <div className='row' style={{justifyContent: "center"}}>
      <div className='referNumber'>
            <img src={task} alt="refer grey" />
          </div>
     <div className='wraper-mineScreen5'>
            <h2>Earn more TOK</h2>
          </div>
         
      <div className="playNumber">
        <h3>Daily Tasks</h3>
          <ul>
            <li><span>
            <img className='playBubble3' src={dailyRewrd} alt="play" />
              </span>
              <span><b>Daily Rewards</b><b>100000 TOK</b></span>
              <span><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span>
              </li>
          </ul>
      </div>
      <div className="playNumber">
      <h3>Task List</h3>
          <ul>
            <li><span>
            <img className='playBubble3' src={telegram} alt="play" />
              </span><span><b>Join our TG Channel</b> <b>100000 TOK</b></span>
              <span><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span>
              </li>
              <li><span>
            <img className='playBubble3' src={twitter} alt="play" />
              </span><span><b>Follow our X account</b> <b>100000 TOK</b></span>
              <span><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span>
              </li>
              <li><span>
            <img className='playBubble3' src={twitter} alt="play" />
              </span><span><b>Like & Retweet Latest update</b> <b>100000 TOK</b></span>
              <span><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span>
              </li>
              <li><span>
            <img className='playBubble3' src={choose} alt="play" />
              </span><span><b>Choose your exchange</b> <b>100000 TOK</b></span>
              <span><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span>
              </li>
              <li><span>
            <img className='playBubble3' src={invite} alt="play" />
            </span><span><b>Choose your exchange</b> <b>100000 TOK</b></span>
            <span><b><img className='rightarrow' src={rightarrow} alt="leaftapper" /></b></span>
            </li>

            
          </ul>
      </div>
      </div>
      </div>
    </>
  );
};

export default TaskScreen;


