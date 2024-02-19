/** @format */

import './App.css';
import { ImHome } from 'react-icons/im';
import { FaDollarSign } from 'react-icons/fa6';
import { useState } from 'react';
function App() {
	const [principal, setPrincipal] = useState('');
	const [intrest, setIntrest] = useState('');
	const [years, setYears] = useState('');
	const [monthlyPayment, setMonthlyPayment] = useState(0);
	const calculateMortgage = (e) => {
		e.preventDefault();
		const principalAmount = parseFloat(principal);
		const intrestRate = parseFloat(intrest) / 100 / 12;
		const totalPayments = parseInt(years) * 12;
		const monthlyPayment =
			(principalAmount *
				intrestRate *
				Math.pow(1 + intrestRate, totalPayments)) /
			(Math.pow(1 + intrestRate, totalPayments) - 1);

		if (!isNaN(monthlyPayment)) {
			setMonthlyPayment(monthlyPayment.toFixed(2));
		} else {
			alert('Please enter valid numbers.');
		}
	};

	return (
		<div
			className='App container'
			style={{ maxWidth: 500, margin: '1rem auto' }}>
			<h1>
				{' '}
				<ImHome /> Mortgage Calculator
			</h1>
			<form onSubmit={calculateMortgage}>
				<div>
					<label>
						{' '}
						Principal Amount <FaDollarSign />{' '}
					</label>
					<input
						type='number'
						value={principal}
						onChange={(e) => setPrincipal(e.target.value)}
					/>
				</div>
				<div>
					<label> Annual Interest Rate (%):</label>
					<input
						type='number'
						value={intrest}
						onChange={(e) => setIntrest(e.target.value)}
					/>
				</div>
				<div>
					<label> Loan Term(Enter in years)</label>
					<input
						type='number'
						value={years}
						onChange={(e) => setYears(e.target.value)}
					/>
				</div>
				<button type='submit'>Calculate</button>
			</form>
			{monthlyPayment > 0 && <h3>Monthly Payments:${monthlyPayment}</h3>}
		</div>
	);
}

export default App;
