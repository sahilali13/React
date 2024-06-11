import { memo } from 'react';
import { log } from '../../log.js';

const IconButton = memo(function IconButton({ children, icon, ...props }) {
	log('<IconButton /> rendered', 2);

	const Icon = icon;
	return (
		<button
			{...props}
			// className='button'
			className='inline-flex gap-2 items-center py-2 px-4 bg-teal-300 text-gray-900 border-none rounded text-center transition-[backround-color_ease] duration-300'
		>
			<Icon
				// className='button-icon'
				className='text-gray-900 text-[0.9rem]'
			/>
			<span className='button-text'>{children}</span>
		</button>
	);
});

export default IconButton;
