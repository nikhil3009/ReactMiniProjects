/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Progress from './components/progress';

function App() {
	const [value, setValue] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setValue((val) => val + 1);
		}, 100);
	}, []);

	return (
		<div className='App'>
			<span className='title'>Progress Bar</span>
			<Progress value={value}></Progress>
		</div>
	);
}

export default App;
