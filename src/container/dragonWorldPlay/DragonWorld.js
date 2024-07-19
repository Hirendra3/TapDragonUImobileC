
import React, { useState, useEffect, useImperativeHandle, forwardRef} from 'react';
import playImage from '../../assets/img/dragonFace.png';
import playImage2 from '../../assets/img/dragonTale.png';
import styled from 'styled-components';
import './style.css';

const Styledimg = styled.div`
  width: 19vw;
  height: 12vw;
  position: absolute;
  margin-top: 25vw;
  left: 53%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 99999999;
  overflow: visible;
  transform-style: preserve-3d;
      filter: drop-shadow(1px 3px 3px black);
`;

const Styledimg2 = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  margin-top: 11px;
  width: 16vw;
  height: 16vw;
  left: 40%;
  top: 5%;
  z-index: 1;
`;

const FoxViewer = forwardRef(({ toFire , perspectived }, ref) => {


  const [perspective, setPerspective] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(playImage);

  useEffect(() => {
    // if (perspective) {
    //   setPerspective(perspectived);
    // }
    setCurrentImage(currentImage)
  }, [currentImage, perspectived]);




  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const moveX = (clientX - innerWidth / 1) / (innerWidth / 1);
    const moveY = (clientY + innerHeight / 1) / (innerHeight / 1);

    const newPerspective = { x: moveX * 180, y: moveY * 0 };
    setPerspective(newPerspective);

  };
  // Expose the simulateMouseMove method to parent component
  useImperativeHandle(ref, () => ({
    simulateMouseMove(perspective) {
      setPerspective(perspective);
    },
  }));



  return (
    // <div className='dragon-house-container' style={{ position: 'relative', width: '100vw', perspective: '1000px' }} onMouseMove={handleMouseMove}>
    <div className='dragon-house-container' onMouseMove={handleMouseMove}>  
    <div className='dragon-house'>
        <Styledimg
          alt="Moving Image"
          image={currentImage}
          style={{
            transform: `translate(-50%, -50%) rotateX(${perspective.y}deg) rotateY(${perspective.x}deg)`,
          }}
        >
          {toFire}
        </Styledimg>
        <Styledimg2 image={playImage2} />
      </div>
    </div>
  );
});

export default FoxViewer;
