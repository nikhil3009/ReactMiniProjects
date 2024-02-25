/** @format */
import './App.css';
import React from 'react';
import { useState } from 'react';

const ToDo = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');
	function createNewtask(event) {
		setNewTask(event.target.value);
	}
	function addNewtask() {
		if (newTask.trim() != '') {
			setTasks((t) => [...t, newTask]);
			setNewTask('');
		}
	}
	function deletetask(index) {
		const updatedTasks = tasks.filter((_, i) => i != index);
		setTasks(updatedTasks);
	}
	function moveUp(index) {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [
				updatedTasks[index - 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	}
	function moveDown(index) {
		if (index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = [
				updatedTasks[index + 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	}
	return (
		<div className='todo'>
			<h1>To-Do List</h1>
			<div>
				<input
					type='text'
					placeholder='Add a task'
					value={newTask}
					onChange={createNewtask}
				/>
				<button
					className='add-button'
					onClick={addNewtask}>
					Add Task
				</button>
			</div>
			<ol>
				{tasks.map((task, index) => (
					<li key={index}>
						<span className='text'>{task}</span>
						<button
							className='delete'
							onClick={() => deletetask(index)}>
							Delete
						</button>
						<button
							className='move'
							onClick={() => moveUp(index)}>
							⏫
						</button>
						<button
							className='move'
							onClick={() => moveDown(index)}>
							⏬
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default ToDo;
