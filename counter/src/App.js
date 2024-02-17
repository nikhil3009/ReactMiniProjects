/** @format */

import './App.css';
import React, { useState } from 'react';

function App() {
	const [counter, setCounter] = useState(0);
	const addValue = () => {
		setCounter(counter + 1);
	};
	const removeValue = () => {
		if (counter >= 1) {
			setCounter(counter - 1);
		}
	};
	return (
		<div>
			<h1 className='title'>This is Counter</h1>
			<h1 className='titlecon'>This is the count:{counter}</h1>
			<div className='btndiv'>
				<button
					onClick={addValue}
					className='btn'>
					Increment
				</button>
				<button
					onClick={removeValue}
					className='btn'>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default App;
