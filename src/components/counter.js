import React, { useState, useEffect } from "react";
import "./counter.css";

function calculateTimeLeft() {
	let difference = +new Date(2021, 7, 6, 17, 0, 0) - +new Date();
	let timeLeft = {};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor(difference / (1000 * 60 * 60) % 24),
			minutes: Math.floor(difference / (1000 * 60) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		}
	}

	return timeLeft;
}

export default function Counter() {
	let [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);	
	});

	return (
		<div className="counter">
			<div>
				<span className="counter__time">
					{ timeLeft.days }
				</span>
				<span className="counter__label">
					Dage
				</span>
			</div>
			<div>
				<span className="counter__time">
					{ timeLeft.hours }
				</span>
				<span className="counter__label">
					Timer
				</span>
			</div>
			<div>
				<span className="counter__time">
					{ timeLeft.minutes }
				</span>
				<span className="counter__label">
					Minutter
				</span>
			</div>
			<div>
				<span className="counter__time">
					{ timeLeft.seconds }
				</span>
				<span className="counter__label">
					Sekunder
				</span>
			</div>
		</div>
	)
}
