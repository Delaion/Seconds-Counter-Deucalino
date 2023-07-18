import React from "react";
import ReactDom from "react-dom";
import Home from "./home.jsx";

    let number=1
    let counter=setInterval(function(){
        number=number+1;
        ReactDOM.render(
            <SecondsCounter 
            digitZero
            number={counter} />,
            document.querySelector('#app'))
    }, 1000); 
    counter.propTypes= {
        digitZero: propTypes.number,
        digitOne: propTypes.number,

    };
 
function SecondsCounter (props) {
    return (
        <div id="My_Seconds_Counter">
            <div className="containerNumbers bg-dark">
                <div className="clock-bg-dark-subtle"> <i className="fa-regular fa-clock-twelve"></i></div>
                <div className="zero-bg-dark-subtle">{props.digitZero}</div>
                <div className="zero-bg-dark-subtle">{props.digitZero}</div>
                <div className="zero-bg-dark-subtle">{props.digitZero}</div>
                <div className="counter-bg-dark-subtle">{counter}</div>
            </div>
        </div>
    );
};

export default SecondsCounter;