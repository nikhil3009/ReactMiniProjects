/** @format */

import './App.css';
import TrafficLight from './TrafficLight';

function App() {
	const lightStates = {
		red: {
			duration: 4000,
			backGroundColor: 'red',
			next: 'green',
		},
		yellow: {
			duration: 500,
			backGroundColor: 'yellow',
			next: 'red',
		},
		green: {
			duration: 10000,
			backGroundColor: 'green',
			next: 'yellow',
		},
	};
	return (
		<div className='main'>
			<TrafficLight lightStates={lightStates} />
		</div>
	);
}

export default App;
