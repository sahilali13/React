import logoImg from '../assets/quiz-logo.png';
export default function Header() {
	return (
		<header className='my-8 mx-0 text-center flex flex-col items-center'>
			<img
				className='w-12 h-12 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]'
				src={logoImg}
				alt='Quiz Logo'
			/>
			<h1 className='py-4 font-roboto-condensed font-bold text-[2.5rem] tracking-[0.6rem] m-0 uppercase bg-gradient-to-r from-fuchsia-400 from-40% to-violet-500 to-60% bg-clip-text'>
				{' '}
				React Quiz
			</h1>
		</header>
	);
}
