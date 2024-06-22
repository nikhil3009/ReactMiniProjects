/** @format */

import { useState } from 'react';
import explorer from './data/folderData';
import './App.css';
import Folder from './components/folder';

function App() {
	const [explorerData, setExplorerData] = useState(explorer);
	return (
		<div className='App'>
			<Folder explorer={explorerData}></Folder>
		</div>
	);
}

export default App;
