export default function GameOver({ winner, onRestart }) {
	return (
		<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(40,38,23,0.95)] animate-pop-in'>
			<h2 className='font-caprasimo text-[4rem] text-center text-amber-300 m-0 tracking-widest mb-8'>
				Game Over!
			</h2>
			{winner && (
				<p className='text-[2rem] text-center text-orange-100 mb-8'>
					{winner} won!
				</p>
			)}
			{!winner && (
				<p className='text-[2rem] text-center text-orange-10 mb-8'>
					It's a draw!
				</p>
			)}
			<p className='text-[2rem] text-center text-orange-100'>
				<button
					className='block my-0 mx-auto text-2xl bg-none border-2 border-solid border-amber-300 text-amber-300 py-2 px-4 rounded cursor-pointer transition-[all_0.2s,color_0.2s] shadow-[0_0_8px_rgba(255,187,0,0.4)] hover:bg-amber-300 hover:text-lime-900 hover:scale-[1.1] hover:shadow-[0_0_20px_rgba(255,187,0,0.8)]'
					onClick={onRestart}
				>
					Rematch!
				</button>
			</p>
		</div>
	);
}
