export default function Log({ turns }) {
	return (
		<ol
			className='max-w-80 text-lime-900 list-none my-8 mx-auto p-0 text-center'
			// id='log'
		>
			{turns.map((turn) => (
				<li
					key={`${turn.square.row}${turn.square.col}`}
					className='rounded animate-slide-in-from-left m-3'
				>
					{turn.player} selected {turn.square.row}, {turn.square.col}
				</li>
			))}
		</ol>
	);
}
