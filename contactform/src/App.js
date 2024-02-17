/** @format */

import React, { useState } from 'react';
import './App.css';

function App() {
	const [details, setDetails] = useState({ name: '', email: '', message: '' });
	const updateDetails = (e) => {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value,
		});
	};
	const submitForm = (e) => {
		e.preventDefault();
		console.log('Contact Form Submitted:', details);
	};
	return (
		<form onSubmit={submitForm}>
			<div>
				<label>Name:</label>
				<input
					type='text'
					name='name'
					value={details.name}
					onChange={updateDetails}></input>
			</div>
			<div>
				<label>Email:</label>
				<input
					type='email'
					name='email'
					value={details.email}
					onChange={updateDetails}></input>
			</div>
			<div>
				<label>Message:</label>
				<textarea
					name='message'
					value={details.message}
					onChange={updateDetails}></textarea>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default App;
