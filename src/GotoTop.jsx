import React, { useState,useEffect } from 'react';
import {IoIosArrowUp} from "react-icons/io";

const GotoTop = () => {
    const [visible,upVisible]=useState(false);

    const listenToScroll=()=>{
let heightTohidden=210;
const winScroll=document.body.scrollTop || document.documentElement.scrollTop;

// console.log(
//     "~ file: GotoTop.jsx ~ line 8 ~listenToScroll ~winScroll",
//     winScroll
// );
if(winScroll>heightTohidden){
    upVisible(true);
   }
   else{
   upVisible(false);
   }

    };

    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll);
        
         return ()=>window.removeEventListener("scroll",listenToScroll); 
        },[]);

        const goToBtn=()=>{
            window.scrollTo({top:0,left:0,behavior:"smooth"});
          }  

  return (
    <>
   
{visible && (<div className="top-btn" onClick={goToBtn}>
      <IoIosArrowUp className='top-btn-icon'/>
    </div>

    )}
   
    </>
  )
}

export default GotoTop;