import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
	const dialog = useRef();

	useEffect(() => {
		if (open) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [open]);

	return createPortal(
		<dialog
			className='backdrop:fixed backdrop:top-0 backdrop:left-0 backdrop:z-[1] backdrop:w-full backdrop:h-screen backdrop:bg-[rgba(0,0,0,0.6)] min-w-[30rem] p-0 z-[2] bg-gray-300 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.26)] animate-slide-down-fade-in'
			ref={dialog}
			onClose={onClose}
		>
			{open ? children : null}
		</dialog>,
		document.getElementById('modal')
	);
}

export default Modal;
