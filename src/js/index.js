//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let number=1
let counter=setInterval(function(){
    number=number+1;
    console.log(number);
    ReactDOM.render(<SecondsCounter number= {number} />, document.querySelector("#app"));
  },1000);
//render your react application

