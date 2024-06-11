import { log } from '../log.js';
import logoImg from '../assets/logo.png';

export default function Header() {
	log('<Header /> rendered', 1);

	return (
		<header
			// id="main-header"
			className='my-8 mx-auto font-lato text-teal-500 flex flex-col items-center'
		>
			<img
				className='w-24 h-24 object-contain drop-shadow-[0_0_8px_rgba(14,26,28,0.8)]'
				src={logoImg}
				alt='Magnifying glass analyzing a document'
			/>
			<h1 className='m-0 text-2xl tracking-[0.15rem]'>
				React - Behind The Scenes
			</h1>
		</header>
	);
}
