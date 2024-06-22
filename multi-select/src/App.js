/** @format */
import { useState } from 'react';
import Select from 'react-select';
import './App.css';

function App() {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const brands = [
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Samsung', label: 'Samsung' },
		{ value: 'Pixel', label: 'Pixel' },
		{ value: 'OnePlus', label: 'OnePlus' },
		{ value: 'Blackberry', label: 'Blackberry' },
		{ value: 'Nokia', label: 'Nokia' },
		{ value: 'Sony', label: 'Sony' },
		{ value: 'LG', label: 'LG' },
		{ value: 'Motorola', label: 'Motorola' },
		{ value: 'Huawei', label: 'Huawei' },
		{ value: 'HTC', label: 'HTC' },
		{ value: 'Xiaomi', label: 'Xiaomi' },
		{ value: 'Oppo', label: 'Oppo' },
		{ value: 'Vivo', label: 'Vivo' },
		{ value: 'Lenovo', label: 'Lenovo' },
		{ value: 'Asus', label: 'Asus' },
		{ value: 'Realme', label: 'Realme' },
		{ value: 'ZTE', label: 'ZTE' },
		{ value: 'Meizu', label: 'Meizu' },
		{ value: 'Alcatel', label: 'Alcatel' },
	];

	const handleChange = (e) => {
		setSelectedOptions(e);
	};
	return (
		<div className='App'>
			<h2>Select your favorite brands</h2>
			<Select
				isMulti
				options={brands}
				value={selectedOptions}
				onChange={handleChange}
				placeholder='Search and select brands'></Select>
			<div>
				<h3>Selected options are</h3>
				<ul>
					{selectedOptions.map((op) => (
						<li key={op.name}>{op.label}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
