/** @format */

import React from 'react';
import './Tab.css';
import { useState } from 'react';

const Tabs = () => {
	const [toggle, setToggle] = useState(1);
	const funToggle = (index) => {
		setToggle(index);
	};
	return (
		<div className='container'>
			<div className='block-tabs'>
				<div
					className={toggle === 1 ? 'tab active-tab' : 'tab'}
					onClick={() => {
						funToggle(1);
					}}>
					HTML Tab
				</div>
				<div
					className={toggle === 2 ? 'tab active-tab' : 'tab'}
					onClick={() => {
						funToggle(2);
					}}>
					CSS Tab
				</div>
				<div
					className={toggle === 3 ? 'tab active-tab' : 'tab'}
					onClick={() => {
						funToggle(3);
					}}>
					JavaScript Tab
				</div>
			</div>
			<div className='content-table'>
				<div className={toggle === 1 ? 'content active-content' : 'content'}>
					<h2>Content</h2>
					<p>
						The HyperText Markup Language or HTML is the standard markup
						language for documents designed to be displayed in a web browser.
					</p>
				</div>
				<div className={toggle === 2 ? 'content active-content' : 'content'}>
					<h2>Content</h2>
					<p>
						Cascading Style Sheets is a style sheet language used for describing
						the presentation of a document written in a markup language such as
						HTML or XML.
					</p>
				</div>
				<div className={toggle === 3 ? 'content active-content' : 'content'}>
					<h2>Content</h2>
					<p>
						JavaScript, often abbreviated as JS, is a programming language that
						is one of the core technologies of the World Wide Web, alongside
						HTML and CSS.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
