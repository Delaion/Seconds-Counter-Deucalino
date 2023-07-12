import react from "react";
import reactDom from "react-dom";
import Home from "./home.jsx";

    let number=1
    let counter=setInterval(function(){
        number=number+1;
    }, 1000); |
    console.log(number);
const SecondsCounter =()=>{
    return (
        <div id="My_Seconds_Counter">
            <div className="containerNumbers bg-dark">
            <i className="fa-regular fa-clock-twelve"></i>
            <p className="bg-dark-subtle">0</p>
            <p className="bg-dark-subtle">0</p>
            <p className="bg-dark-subtle">0</p>
            <p className="bg-dark-subtle">0</p>
            <p className="bg-dark-subtle" id="starter">{counter}</p>

            </div>
        </div>
    );
};

export default SecondsCounter;