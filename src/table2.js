import React from 'react'
import Num2 from './num2.js'
// import { FaBars } from 'react-icons/fa'
// import { useState, useEffect } from 'react'
// import {tdata2} from './tabledata.js'
// import { GiManualMeatGrinder } from 'react-icons/gi'
// import {socket} from './App.js'
import Sidebar from './Sidebar.js'

function Table2(props) {
  const maindata = props.maindata;
  return (
    <div className="outer-container">
        <div className="left-container">
          <Sidebar/>
        </div>
        <div className="main-container">
          <div className="heading">
            <h2>Tabular representation</h2>
          </div>
          <div className="sub-container">
            <div className='subsub-c'>
              <Num2 data={maindata}/>
            </div>
          </div>
        </div>
    </div>
  // <main>
  //   <div /*className='boxdiv'*/>
  //     <div style={{margin:'4 rem'}}>
  //         Deflection data
  //       </div>
  //     <Num2 data={maindata}/>
  //   </div>
  // </main>
  );
}

export default Table2;