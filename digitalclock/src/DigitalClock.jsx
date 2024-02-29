/** @format */

import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
	function calculateTimeLeft() {
		const targetDate = new Date('March 22, 2024 20:00:00 GMT+0530');
		const difference = targetDate - new Date();
		let time = {};

		if (difference > 0) {
			time = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return time;
	}
	const [time, setTime] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTime(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	function formatCountdown(time) {
		if (Object.keys(time).length === 0) {
			return 'Enjoy the IPL Season!';
		}
		const { days, hours, minutes, seconds } = time;

		return `${days} Days ${padZero(hours)}hrs:${padZero(minutes)}mins:${padZero(
			seconds
		)}secs`;
	}

	function padZero(number) {
		return number < 10 ? '0' + number : number;
	}

	return (
		<div className='clock-container'>
			<div className='clock'>
				<span>{formatCountdown(time)}</span>
			</div>
		</div>
	);
};

export default DigitalClock;
