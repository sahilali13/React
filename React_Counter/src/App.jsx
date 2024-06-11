import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

import { log } from './log.js';

function App() {
	log('<App /> rendered');
	const [chosenCount, setChosenCount] = useState(0);
	function handleSetCount(newCount) {
		setChosenCount(newCount);
	}

	return (
		<>
			<Header />
			<main className='w-[90%] max-w-[50rem] my-8 mx-auto'>
				<ConfigureCounter onSet={handleSetCount} />
				<Counter
					key={chosenCount}
					initialCount={chosenCount}
				/>
			</main>
		</>
	);
}

export default App;
