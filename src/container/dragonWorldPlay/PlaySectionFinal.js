import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
//import FoxViewer from '../dragonWorld/DragonWorld'
import playImage from '../../assets/img/28590656.jpg';  
import playImage2 from '../../assets/img/285906599.jpg';  
import dragon from '../../assets/img/dragon2.png';  
// import FireDrg from '../dragonWorld/fire'
import './stylePlay.css';

const RandomCircle = () => {
  const [circlePosition, setCirclePosition] = useState({ top: 100, left: 0 });
  const [clickCount, setClickCount] = useState(0); // State to count clicks


  const getRandomPosition = () => {
    const container = document.getElementById('background-container');
    if (container) {
      const containerHeight = container.clientHeight;
      const containerWidth = container.clientWidth;
      const circleSize = 130; // Adjust the circle size if needed

      const exclusionZoneSize = 500;
      const exclusionZoneTop = (containerHeight - exclusionZoneSize) / 2;
      const exclusionZoneLeft = (containerWidth - exclusionZoneSize) / 2;

      let top, left;

      do {
        top = Math.random() * (containerHeight + circleSize);
        left = Math.random() * (containerWidth - circleSize);
      } while (
        top > exclusionZoneTop &&
        top < exclusionZoneTop + exclusionZoneSize - circleSize &&
        left > exclusionZoneLeft &&
        left < exclusionZoneLeft + exclusionZoneSize - circleSize
      );

      setCirclePosition({ top, left });
    }
  };



  useEffect(() => {
    getRandomPosition(); // Initial placement
    const intervalId = setInterval(getRandomPosition, 4000); // Update position every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // const handleClick = async () => {
  //     const newClickCount = clickCount + 1;
  //     setClickCount(newClickCount);

  //     const response = await axios.get('http://localhost:5000/clickData');
  //     const existingData = response.data;
  //     if (existingData.length > 0) {
  //         await axios.delete(`http://localhost:5000/clickData/${existingData[0].id}`);
  //     }
  //     // Send the new click count to the API
  //     try {
  //         await axios.post('http://localhost:5000/clickData', { clickCount: newClickCount });
  //         console.log('Click count sent to the server:', newClickCount);
  //     } catch (error) {
  //         console.error('Error sending click count to the server:', error);
  //     }
  // };


  const [tapDragonNumber, setTapDragonNumber] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  //const [toFire, setToFire] = useState('');
  //const [currentImage, setCurrentImage] = useState(null);
  const [perspectived, setPerspectived] = useState({ x: 0, y: 0 });
  const foxViewerRef = useRef();

  const handleAddToCart = async (e) => {

    setIsSending(true);
  const newClickCount = tapDragonNumber + 100;
  setTapDragonNumber(newClickCount);
    //setToFire((prevValue) => (prevValue === 'yyyyyy' ? '666' : 'yyyyyy'));
   // setToFire((prevValue) => (prevValue.type === FireDrg ? '' : <FireDrg />));
  //  console.log('setToFirekkkkkk......', toFire)

      
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const moveX = (clientX - innerWidth / 1) / (innerWidth / 1);
    const moveY = (clientY + innerHeight / 2) / (innerHeight / 2);

    const newPerspectived = { x: moveX * 180, y: moveY * 0 };
    //setCurrentImage(currentImage);
    setPerspectived(newPerspectived);
    console.log('AAAAAAAAAAAAAAAAAAAA......', newPerspectived)

    // Call the handleMouseMove method in FoxViewer component
    if (foxViewerRef.current) {
      foxViewerRef.current.simulateMouseMove(newPerspectived);
    }
   
    try {
      const response = await axios.get(
        `https://api.tokame.network/storetapdata/989118640/${newClickCount}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const existingData = response.data
      console.log('yyyyyyyyyyyyyyyy:', existingData);
     
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
    // if (existingData.length > 0) {
    //   await axios.delete(`http://localhost:5000/clickData/${existingData[0].id}`);
    // }
    // Send the new click count to the API

    setTimeout(() => {
      setIsSending(false);
     //  setCartTotal(prevTotal => prevTotal + 100);
   //  setCartTotal(tapDragonNumber + 100);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }, 1000);

  };
 
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get('https://api.tokame.network/gamelogintap/989118640');
        if (response.data.status) {
          const initialTapNumber = response.data.result.earngametap;
          setTapDragonNumber(initialTapNumber);
        } else {
          console.error('Error in API response status');
        }
      } catch (error) {
        console.error('Error fetching initial data', error);
      }
    };

    fetchInitialData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

 

  return (
    <>
      <div id="background-container" style={{ position: 'relative', height: '100%', width: '100%' }}>
        <div id="cart" className={`cart ${isShaking ? 'shake' : ''}`} data-totalitems={tapDragonNumber}>
          <i className="fas fa-shopping-cart"></i>
        </div>

        {/* <h5>Total Clicks Count By the User : {tapDragonNumber}</h5> */}

       


      </div>
      <img className='rcircle' src={playImage} alt='playImage' />
      <img className='rcircle2' src={playImage2} alt='playImage' />
      <div class="bird-container bird-container--one">
		<div class="bird bird--one"></div>
	</div>
	
	{/* <div class="bird-container bird-container--four">
		<div class="bird bird--four"></div>
	</div> */}
      {/* <FoxViewer ref={foxViewerRef} perspectived={perspectived} toFire={toFire} /> */}
      {/* <FoxViewer ref={foxViewerRef} perspectived={perspectived} /> */}
      <div className="page-wrapper">

        <button
          id="addtocart"
          className={isSending ? 'sendtocart pulse-button' : 'pulse-button'}
          style={{
            top: `${circlePosition.top}px`,
            left: `${circlePosition.left}px`,
          }}
          onClick={handleAddToCart}
        >
      <img className='dragonPly' src={dragon} alt='dragon' />
          <span className="cart-item">
            <b>
              {tapDragonNumber}
            </b>
          </span>
        </button>
      </div>
    
    </>
  );
};

export default RandomCircle;
