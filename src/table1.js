import React from 'react'
import Num from './num.js'
// import { FaBars } from 'react-icons/fa'
// import { useState, useEffect } from 'react'
// import {tdata2} from './tabledata'
// import { GiManualMeatGrinder } from 'react-icons/gi'
// import {socket} from './App'

function Table1(props) {
  const maindata = props.maindata;
  // const [data, setData] = useState(tdata2.map((item,i)=>{
  //   // let mysr = i+1;
  //   return {...item, sr:i+1}
  // }));
  // useEffect(()=>{
  //   socket.on('deflection_data', (socketdata)=>{
  //     setData((prevd)=>{
  //       let arr = prevd.map((item,i)=>{
  //         if(i===0){
  //           return {
  //             id:1,
  //             temp1:socketdata.temp1,
  //             temp2:socketdata.temp2,
  //             temp3:socketdata.temp3, 
  //             sr: 1};
  //         }
  //         else{
  //           let ni = prevd[i-1];
  //           ni.id = i;
  //           ni.sr = i+1;
  //           return ni;
  //         }
  //       });
  //       return arr;
  //     })
  //   })
  // },[socket]);
return <main>
  <div /*className='boxdiv'*/>
    <div style={{margin:'4 rem'}}>
        Temperatures data
      </div>
    <Num data={maindata}/>
    {/* <button type='button' className='btn' onClick={()=>{
      handler();
      setTimeout(()=>{},1000);
    }}>
      update
    </button> */}
  </div>
</main>
}

export default Table1;