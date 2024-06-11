import { useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
	log('<HistoryItem /> rendered', 3);

	const [selected, setSelected] = useState(false);

	function handleClick() {
		setSelected((prevSelected) => !prevSelected);
	}

	let liCSS =
		'w-8 ml-2 text-teal-500 p-[0.2rem] first:text-teal-200 first:font-bold first:text-[1.2rem]' +
		(selected ? ' bg-teal-900 text-cyan-100 rounded' : '');

	return (
		<li
			onClick={handleClick}
			className={liCSS}
		>
			{count}
		</li>
	);
}

export default function CounterHistory({ history }) {
	log('<CounterHistory /> rendered', 2);

	return (
		<ol className='flex flex-col gap-[0.2rem] justify-center items-center my-0 mx-auto p-0 list-none text-center'>
			{history.map((count) => (
				<HistoryItem
					key={count.id}
					count={count.value}
				/>
			))}
		</ol>
	);
}
