import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card(props) {
	return (
		<div className="card bg-dark text-light m-0 text-center">
			<div className="card-body">
				<h2>{props.number}</h2>
			</div>
		</div>
	);
}

Card.propTypes = {
	number: Proptypes.string
};
