import { useState } from 'react';
import { log } from '../../log.js';

export default function ConfigureCounter({ onSet }) {
	log('<ConfigureCounter /> rendered', 1);
	const [enteredNumber, setEnteredNumber] = useState(0);

	function handleChange(event) {
		setEnteredNumber(+event.target.value);
	}

	function handleSetClick() {
		onSet(enteredNumber);
		setEnteredNumber(0);
	}

	return (
		<section
			// id='configure-counter'
			className='my-0 mx-auto p-0 border border-teal-700 rounded-md text-center flex gap-2 items-center justify-center border-none'
		>
			<h2 className='m-2 text-base font-bold text-teal-300'>
				Set Counter
			</h2>
			<input
				className='w-16 text-center m-2 py-2 px-1 border border-solid border-teal-300 rounded bg-gray-900 text-teal-300 text-base'
				type='number'
				onChange={handleChange}
				value={enteredNumber}
			/>
			<button
				className='cursor-pointer bg-transparent text-cyan-300 border-none hover:text-teal-300'
				onClick={handleSetClick}
			>
				Set
			</button>
		</section>
	);
}
