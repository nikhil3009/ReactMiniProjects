/** @format */

import React, { useState } from 'react';

import './App.css';

const Accordion = ({ jobs }) => {
	const [openIndex, setOpenIndex] = useState(null);
	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div>
			<h1 className='accordion-header'>Basic Accordion</h1>
			{jobs.map((job, index) => (
				<div
					key={index}
					className='accordion-container'>
					<button
						onClick={() => toggle(index)}
						className='accordion-title'>
						<h3 className='icon'>{job.title}</h3>
					</button>
					{openIndex === index && (
						<div className='accordion-content'>{job.content}</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
