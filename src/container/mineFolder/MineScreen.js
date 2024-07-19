import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import mining from "../../assets/img/mining2.png"
import TOKcoin2 from "../../assets/img/TOK-coin2.png"
import HeaderMenues from "../headerMenues/HeaderMenues"
import comingSoon from "../../assets/img/comingSoon.png"

const MineScreen = () => {
  const [loading, setLoading] = useState(true);
  const [earnGameSpin, setEarnGameSpin] = useState([])


  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await axios.get('https://api.tokame.network/gameloginspin/989118640');
        if (response.data.status) {
          setEarnGameSpin(response.data.result.earngamespin);
        } else {
          console.error('Error in API response status');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };


    fetchData();
  }, []);
 
  return (
    <>
    <div className='blurrerScreen'>
      <span>
        <img src={comingSoon} alt='' />
      </span>
    </div>
       <div className='container mrGinBottom'>
       <div className='row' style={{justifyContent: "center"}}>
       <HeaderMenues />
     <div className='wraper-mineScreen'>
     <div className='mineScreen-one'>
      <img src={mining} alt="mining" />
      </div>
      <div className="minNumber">
          <ul>
            <li><span>Earn TOK Points</span></li>
            <li className="two-tkCoins3"><span>on every hit</span></li>
          </ul>
      </div>
      <div className="minNumber">
          <ul>
            
            <li className="two-tkCoins">
           
              <span className='two-tkCoins5'>
              <img className='TOKcoin2 Ghkiop' src={TOKcoin2} alt="mining" />
                {earnGameSpin}
                
                </span>
              <span className='two-tkCoins6'>Points earned</span>
            </li>   
          </ul>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default MineScreen;


