import React, { useState, useEffect } from "react";
import { Card } from "./cards.js";

//create your first component
export function Home() {
	const [myInterval, setMyInterval] = useState(null);
	const [digito1, setDigito1] = useState(0);
	const [digito2, setDigito2] = useState(0);
	const [digito3, setDigito3] = useState(0);
	const [digito4, setDigito4] = useState(0);
	const [digito5, setDigito5] = useState(0);
	const [digito6, setDigito6] = useState(0);

	useEffect(() => {
		setInterval(function() {
			setDigito1(digito1 => digito1 + 1);
		}, 1000);

		setInterval(function() {
			setDigito2(digito2 => digito2 + 1);
		}, 10000);

		setInterval(function() {
			setDigito3(digito3 => digito3 + 1);
		}, 100000);

		setInterval(function() {
			setDigito4(digito4 => digito4 + 1);
		}, 1000000);

		setInterval(function() {
			setDigito5(digito5 => digito5 + 1);
		}, 10000000);

		setInterval(function() {
			setDigito6(digito6 => digito6 + 1);
		}, 100000000);
	}, []);

	if (digito1 > 9) {
		setDigito1(digito1 => (digito1 = 0));
	}
	if (digito2 > 9) {
		setDigito2(digito2 => (digito2 = 0));
	}
	if (digito3 > 9) {
		setDigito3(digito3 => (digito3 = 0));
	}
	if (digito4 > 9) {
		setDigito4(digito4 => (digito4 = 0));
	}
	if (digito5 > 9) {
		setDigito5(digito5 => (digito5 = 0));
	}
	if (digito6 > 9) {
		setDigito5(digito6 => (digito6 = 0));
	}

	return (
		<div className="container justify-content-center inline-block pt-5">
			<div className="row">
				<div className="col-7 mx-auto">
					<div className="card-deck">
						<Card number={<i className="far fa-clock"></i>} />
						<Card number={String(digito6)} />
						<Card number={String(digito5)} />
						<Card number={String(digito4)} />
						<Card number={String(digito3)} />
						<Card number={String(digito2)} />
						<Card number={String(digito1)} />
					</div>
				</div>
			</div>
		</div>
	);
}
