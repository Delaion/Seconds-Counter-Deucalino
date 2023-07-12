import React from "react";
import reactDom from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<SecondsCounter/>
	);
};
reactDom.render(<SecondsCounter/>, document.getElementById('root'))

export default Home;
