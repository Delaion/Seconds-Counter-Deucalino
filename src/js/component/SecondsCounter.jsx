import React from "react";
 
function SecondsCounter (props) {
    return (
        <div id="My_Seconds_Counter bg-dark">
            <div className="containerNumbers bg-dark d-flex flex-row x-2">
                <div className="clock-bg-dark-subtle ">
                <i className="fa-regular fa-clock text-light x-2"></i>
                </div>
                <div className="zero-bg-dark-subtle text-white">0</div>
                <div className="zero-bg-dark-subtle text-white">0</div>
                <div className="zero-bg-dark-subtle text-white">0</div>
                <div className="counter-bg-dark-subtle text-white">{props.number}</div>
            </div>
        </div>
    );
};


export default SecondsCounter;