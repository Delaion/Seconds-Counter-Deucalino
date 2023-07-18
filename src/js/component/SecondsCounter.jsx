import React from "react";
import ReactDom from "react-dom";
import Home from "./home.jsx";
window.onload= function counter () {
    let number=1
    let counter=setInterval(function(){
        number=number+1;
        console.log(number);
      },1000);
      console.log(number);
    };
   
      
 
function SecondsCounter (props) {
    return (
        <div id="My_Seconds_Counter">
            <div className="containerNumbers bg-dark">
                <div className="clock-bg-dark-subtle"> <i className="fa-regular fa-clock-twelve"></i></div>
                <div className="zero-bg-dark-subtle">0</div>
                <div className="zero-bg-dark-subtle">0</div>
                <div className="zero-bg-dark-subtle">0</div>
                <div className="counter-bg-dark-subtle">{counter}</div>
            </div>
        </div>
    );
};


export default SecondsCounter;