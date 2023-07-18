import React from "react";
import ReactDom from "react-dom";

import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<SecondsCounter/>
	);
};
ReactDOM.render(<SecondsCounter/>), document.querySelector("#app");

export default Home;
