export default function Error({ title, message, onConfirm, isModalError }) {
	let modalCss =
		'max-w-[40rem] p-4 bg-red-200 text-red-900' +
		(isModalError ? ' m-auto' : ' my-4 mx-auto');
	return (
		<div
			// className='error'
			className={modalCss}
		>
			<h2>{title}</h2>
			<p>{message}</p>
			{onConfirm && (
				<div
					// id='confirmation-actions'
					className='mt-4 flex justify-end gap-4'
				>
					<button
						onClick={onConfirm}
						// className='button'
						className='cursor-pointer font-raleway text-base py-2 px-6 border-none bg-red-900 shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-white hover:bg-red-800 focus:bg-red-800'
					>
						Okay
					</button>
				</div>
			)}
		</div>
	);
}
