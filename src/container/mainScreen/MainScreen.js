import React from 'react';
import HomePage from '../homeFolder/HomePage'
import BottomNavigationBar from '../bottomNavigationBar/BottomNavigationBar'
import MineScreen from '../mineFolder/MineScreen'

const MainScreen = () => {


    return (
        <>
         <div className='wraper'>
            {/* <HomePage />
            <MineScreen /> */}
            <BottomNavigationBar />
            </div>
        </>
    );
};

export default MainScreen;
