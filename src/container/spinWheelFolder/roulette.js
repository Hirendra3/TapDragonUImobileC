import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wheel } from "react-custom-roulette";
import logoicon from "../../assets/img/logo-icon.png"
import logoicon6 from "../../assets/img/coloredbutton.png"

const originalData = [
  { option: "05" },
  { option: "10" },
  { option: "20" },
  { option: "30" },
  { option: "40" },
  { option: "50" },
  { option: "60" },
  { option: "00" },
  { option: "70" },
  { option: "80" },
  { option: "90" },
  { option: "100" },
];

const originalDummydata = [
  { option: "gh kshf fsfjdl" }

]



const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(originalData);

  const [addClassTo, setAddClassTo] = useState('noClassto');


  const postSpinData = async (prizeOption) => {
    try {
      const response = await axios.get(
        `https://api.tokame.network/storespindata/989118640/${prizeOption}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Data posted successfully:', response.data);
      console.log('iiiiiiiiiiiiiii',prizeOption)
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // Request made but no response received
        console.error('Error request:', error.request);
      } else {
        // Something else happened in making the request
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };
  const handleSpinClick = async () => {
    const newPrizeNumber = Math.floor(Math.random() * originalData.length);
    setPrizeNumber(newPrizeNumber);
   
    setMustSpin(true);
    setAddClassTo('addClsto')

    const prizeOption = originalData[newPrizeNumber].option;
    await postSpinData(prizeOption);

    console.log("%%%%%%%%%%%%%%",prizeOption)
  };

  return (
    <>
     <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={rouletteData}
          spinDuration={[0.2]}
          outerBorderColor={["#f2f2f2"]}
          outerBorderWidth={[10]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["#dedede"]}
          radiusLineWidth={[1]}
          fontSize={30}
          textColors={["#000000"]}
          backgroundColors={[
            "#ff6600",
            "#f3ba2f",
            "#ff6600",
            "#f3ba2f",
            "#ff6600",
            "#f3ba2f",
            "#ff6600",
            "#f3ba2f",
            "#ff6600",
            "#f3ba2f",
            "#ff6600",
            "#f3ba2f"
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
            console.log(originalData[prizeNumber]);
          }}
        />
       <button className="button roulette-button" onClick={handleSpinClick}>
         <img src={logoicon} alt="logo" />
        </button>
      </div>
      {/* <br />
      <button className="SpinButton" onClick={handleSpinClick}>SPIN</button> */}
      <div className="winNumber">
        {!mustSpin ? (
          <ul>
            <li className={addClassTo}><span>Congratulations !</span><span>you have won</span>
            <span className="two-tkCoins"> {originalData[prizeNumber].option} TOK Coin</span>
            </li>
            <li className="two-tkCoins">
            <button className="logoicon6n" onClick={handleSpinClick}>
         <img className="logoicon6" src={logoicon6} alt="logo" />
        </button>
              </li>
          </ul>
        ) : (
          <span>SPINNING...</span>
        )}
      </div>
    </>
  );
};

export default Roulette;
