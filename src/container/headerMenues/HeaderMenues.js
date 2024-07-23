import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TOKcoin2 from "../../assets/img/profile-icon.png"
import GameLevelBar from "../gameLevel/gameLevelBar"
import setting from "../../assets/img/setting.png"
import binance from "../../assets/img/binance.png"
import dollarcoin from "../../assets/img/dollarcoin.png"
import SpinLeatherBoardList from "../tokSpinList/SpinLeatherBoardList"
import './stylePopup.css'

const HeaderMenues = () => {
  const [loading, setLoading] = useState(true);
  const [earnGameSpin, setEarnGameSpin] = useState([])
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await axios.get('https://api.tokame.network/getExchanges');
        if (response.data.status) {
          setEarnGameSpin(response.data.result);
        } else {
          console.error('Error in API response status');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };


    fetchData();
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleClickOutside = (event) => {
    if (
      isChecked &&
      !event.target.closest('.toggle')
    ) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isChecked]);
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
              <p>Multiplier</p>
              <span className='biFxd'>
               
              <span className='biFxd2'>
                cccccccccccccc
                </span>
              </span>
            </div>
          </div><div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6' style={{padding:'0'}}>
            <div className='HeadeueSlides'>
              <div className='dWxsign'>
              <div className='dixBlk' style={{borderRight:'1px solid #fff'}}><span>
              <label for="popup-1"><img className='TOKcoin4' src={binance} alt='binance' /></label>
                </span></div>
              <div className='dixBlk dOmBoxify'>
              
       
      <div className="dropdown toggle">
        <input
          id="t1"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label className='labldOne' htmlFor="t1"><span>TOK</span>
        <span>Rank <b>5</b></span>
        </label>
        <SpinLeatherBoardList />
      </div>
  <div className='dropDxcv'>
  {/* <span><img className='TOKcoin4 TOK9' src={dollarcoin} alt='dollarcoin' />0.00</span>  */}
  </div>
          
              </div>
              
              
              
              
              
              <div className='dixBlk' style={{borderLeft:'1px solid #fff', display:"none"}}>
                <span><img className='TOKcoin4' src={setting} alt='setting' /></span></div>
              
               
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>

      <input type="checkbox" class="vcms__popup-check" name="popup-1" id="popup-1" />
<div class="vcms__popup">
  
  <div class="inner">
    <div class="header">
    <div className='hedone'>Exchanges</div>
      <div className='hedone'><label class="closew" for="popup-1">X</label></div>

    </div>
    <div class="exchngeList">
    
        <ul>
         
            {earnGameSpin.map((exchange, index) => (
              <li key={index}>
                <span>{exchange}</span>
              </li>
            ))}
         
        </ul>
   
    </div>
    
  </div>
</div>



    </>
  );
};

export default HeaderMenues;


