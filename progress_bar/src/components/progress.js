/** @format */
import { useState, useEffect } from 'react';
function Progress({ value = 0 }) {
	const [percent, setPercent] = useState(value);
	useEffect(() => {
		setPercent(Math.min(100, Math.max(0, value)));
	}, [value]);
	return (
		<div className='bar'>
			<span style={{ color: percent > 49 ? 'white' : 'black' }}>
				{percent.toFixed()}%
			</span>
			<div
				style={{ width: `${percent}%` }}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percent}
				role='progressbar'
			/>
		</div>
	);
}
export default Progress;
