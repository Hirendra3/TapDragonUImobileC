import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../../assets/img/home.png'
import greyImg from '../../assets/img/home-grey.png'
import mine from '../../assets/img/mine.png'
import minegrey from '../../assets/img/mine-grey.png'
import play from '../../assets/img/play1.png'
import playgrey from '../../assets/img/play1-grey.png'
import refer from '../../assets/img/refer.png'
import refergrey from '../../assets/img/refer-grey.png'
import task from '../../assets/img/task.png'  
import taskgrey from '../../assets/img/task-grey.png'                    
import './style.css';


const bgColorsBody = ['#000000', '#000000', '#000000', '#000000', '#000000'];

const BottomNavigationBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const menuBorderRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = bgColorsBody[activeIndex];
    offsetMenuBorder(menuRef.current.querySelector('.active'), menuBorderRef.current);
  }, [activeIndex]);

  const offsetMenuBorder = (element, menuBorder) => {
    const offsetActiveItem = element.getBoundingClientRect();
    const menu = menuRef.current;
    const left =
      Math.floor(
        offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      ) + 'px';
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  const handleResize = () => {
    const menuBorder = menuBorderRef.current;
    offsetMenuBorder(menuRef.current.querySelector('.active'), menuBorder);
    menuRef.current.style.setProperty('--timeOut', 'none');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (index, route) => {
    setActiveIndex(index);
    navigate(route);
  };
  return (
    <div className='BottomNavigationBar'>
      <menu className="menu" ref={menuRef}>
      <button
          className={`menu__item nav1 ${activeIndex === 0 ? 'active' : ''}`}
          style={{ '--bgColorItem': '#ff8c00' }}
          onClick={() => handleClick(0, '/')}
        >
          <img className='greyImg' src={greyImg} alt='greyImg' />
          <img className='bottomNav-icons' src={home} alt='home' />
          <span className="menuborder">Home</span>
          <div className="menu__border" ref={menuBorderRef} style={{visibility:'hidden'}}></div>
        </button>
        <button
          className={`menu__item nav1 ${activeIndex === 1 ? 'active' : ''}`}
          style={{ '--bgColorItem': '#f54888' }}
          onClick={() => handleClick(1, '/mine')}
        >
          <img className='greyImg' src={minegrey} alt='minegrey' />
          <img className='bottomNav-icons' src={mine} alt='mine' />
          <span className="menuborder">Mine</span>
        </button>
        <button
          className={`menu__item nav1 ${activeIndex === 2 ? 'active' : ''}`}
          style={{ '--bgColorItem': '#4343f5' }}
          onClick={() => handleClick(2, '/refer')}
        >
          <img className='greyImg' src={refergrey} alt='playgrey' />
          <img className='bottomNav-icons' src={refer} alt='play' />
          <span className="menuborder">Refer</span>
        </button>
        <button
          className={`menu__item nav1 ${activeIndex === 3 ? 'active' : ''}`}
          style={{ '--bgColorItem': '#e0b115' }}
          onClick={() => handleClick(3, '/play')}
        >
          <img className='greyImg' src={playgrey} alt='refergrey' />
          <img className='bottomNav-icons' src={play} alt='refer' />
          <span className="menuborder">Play</span>
        </button>
      
        <button
          className={`menu__item nav1 ${activeIndex === 4 ? 'active' : ''}`}
          style={{ '--bgColorItem': '#65ddb7' }}
          onClick={() => handleClick(4, '/task')}
        >
          <img className='greyImg' src={taskgrey} alt='taskgrey' />
          <img className='bottomNav-icons' src={task} alt='task' />
          <span className="menuborder">Task</span>
        </button>
        
      </menu>
      {/* <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7 c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5 c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div> */}
    </div>
  );
};

export default BottomNavigationBar;
