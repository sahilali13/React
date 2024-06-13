export default function GameBoard({ onSelectTile, board }) {
	return (
		<ol
			className='list-none m-0 flex flex-wrap justify-center gap-8 my-12 mx-0 p-0 flex-col'
			// id='game-board'
		>
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol className='flex flex-wrap justify-center gap-8 m-0 p-0'>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									className='w-32 h-32 border-none bg-gray-400 text-lime-900 text-[5rem] cursor-pointer font-caprasimo p-4'
									onClick={() =>
										onSelectTile(rowIndex, colIndex)
									}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
