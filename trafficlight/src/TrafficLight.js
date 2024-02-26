/** @format */
import './App.css';
import React, { useState, useEffect } from 'react';

const TrafficLight = ({ lightStates }) => {
	const [lightState, setLightState] = useState('green');
	useEffect(() => {
		const { duration, next } = lightStates[lightState];
		const timerId = setTimeout(() => {
			setLightState(next);
		}, duration);
		return () => {
			clearTimeout(timerId);
		};
	}, [lightState]);
	return (
		<div className='traffic'>
			{Object.keys(lightStates).map((color) => (
				<div
					className='light'
					style={{
						backgroundColor:
							color === lightState && lightStates[color].backGroundColor,
					}}></div>
			))}
		</div>
	);
};

export default TrafficLight;
