import React, { useState, useEffect, useRef } from 'react';

const HeaderTopMenue = () => {

  return (
    <>


   
      <div className='containerBox2'>
        
        <div className='row'>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:'0'}}>
            <div className='navigate biFs' style={{textAlign:'left'}}>
              <span className='biF'>
                Cancel
                </span>      
            </div>
          </div>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:'0'}}>
            <div className='navigate'>
              <span className='biF'>
                Tokame Network
                </span>      
            </div>
          </div>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:'0'}}>
            <div className='navigate biFa'>
              <span className='biF'>
              <span className='bowlBlk'>
                ...
                </span>
                </span>      
            </div>
          </div>
        </div>
      </div>
    

    </>
  );
};

export default HeaderTopMenue;


