import { useEffect } from 'react';

import ProgressBar from './ProgressBar.jsx';

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onConfirm();
		}, TIMER);

		return () => {
			clearTimeout(timer);
		};
	}, [onConfirm]);

	return (
		<div
			// id='delete-confirmation'
			className='p-4'
		>
			<h2 className='font-raleway text-2xl m-0 p-0 text-red-900'>
				Are you sure?
			</h2>
			<p className='my-0 mx-auto text-[1.15rem] max-w-[38ch] text-red-800'>
				Do you really want to remove this place?
			</p>
			<div
				// id='confirmation-actions'
				className='mt-4 flex justify-end gap-4'
			>
				<button
					onClick={onCancel}
					// className='button-text'
					className='bg-transparent border-none p-0 font-raleway text-base text-red-900'
				>
					No
				</button>
				<button
					onClick={onConfirm}
					// className='button'
					className='cursor-pointer font-raleway text-base py-2 px-6 border-none rounded bg-red-900 shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-white hover:bg-red-800 focus:bg-red-800'
				>
					Yes
				</button>
			</div>
			<ProgressBar timer={TIMER} />
		</div>
	);
}
