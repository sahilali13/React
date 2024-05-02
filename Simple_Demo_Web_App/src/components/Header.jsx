import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomIndex(max) {
	return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
	const description = reactDescriptions[genRandomIndex(2)];

	return (
		<header className='text-center my-12 mx-0'>
			<img
				src={reactImg}
				alt='Stylized atom'
				className='h-20 w-40 object-cover mx-auto'
			/>
			<h1 className='m-0 font-roboto_condensed text-7xl bg-header_gradient bg-clip-text text-transparent shadow-[0_2px_8px_rgba(0, 0, 0, 0.5)]'>
				React Essentials
			</h1>
			<p className='m-0 text-xl text-violet_frog font-roboto_condensed'>
				{description} React concepts you will need for almost any app
				you are going to build!
			</p>
		</header>
	);
}
