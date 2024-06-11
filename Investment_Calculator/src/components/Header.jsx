import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
	return (
		<header
			// id='header'
			className='text-center my-12 mx-auto flex flex-col items-center'
		>
			<img
				className='w-20 h-20 object-contain bg-transparent'
				src={logo}
				alt='logo'
			/>
			<h1 className='text-2xl'>Investment Calculator</h1>
		</header>
	);
}
