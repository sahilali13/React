export default function Places({
	title,
	places,
	fallbackText,
	onSelectPlace,
	isLoading,
	loadingText,
}) {
	console.log(places);
	return (
		<section className='max-w-[85rem] my-8 mx-auto p-4 border-2 border-solid border-gray-800 rounded-lg'>
			<h2 className='font-raleway text-2xl m-0 p-0 mb-4 text-cyan-200 text-center'>
				{title}
			</h2>
			{isLoading && <p className='text-center'>{loadingText}</p>}
			{!isLoading && places.length === 0 && (
				<p className='text-center'>{fallbackText}</p>
			)}
			{!isLoading && places.length > 0 && (
				<ul className='max-w-7xl grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-8 my-8 mx-auto p-0 list-none'>
					{places.map((place) => (
						<li
							key={place.id}
							className='relative flex flex-col rounded-lg bg-gray-900 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] animate-slide-up-fade-in group'
						>
							<button
								className='p-0 bg-transparent border-none transition-all duration-200 hover:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] focus:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] hover:rounded-lg focus:rounded-lg group-odd:hover:rotate-[5deg] group-odd:focus:rotate-[5deg] group-even:hover:rotate-[-5deg] group-even:focus:rotate-[-5deg]'
								onClick={() => onSelectPlace(place)}
							>
								<img
									className='w-full h-full object-cover rounded-lg'
									src={`http://localhost:3000/${place.image.src}`}
									alt={place.image.alt}
								/>
								<h3 className='font-raleway font-normal text-[0.9rem] absolute bottom-0 right-4 my-4 mx-auto bg-yellow-200 rounded py-[0.15rem] px-[0.35rem] shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-gray-900'>
									{place.title}
								</h3>
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
