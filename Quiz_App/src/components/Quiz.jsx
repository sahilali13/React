import { useCallback, useState } from 'react';

import QUESTIONS from '../questions.js';

import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestonIndex = userAnswers.length;
	const quizIsComplete = activeQuestonIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer
	) {
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectedAnswer];
		});
	}, []);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div className='max-w-[50rem] m-auto p-8 bg-gradient-to-b from-indigo-900 to-indigo-900 rounded-lg shadow-[1px_1px_8px_4px_rgba(12,5,32,0.6)] text-center'>
			<Question
				key={activeQuestonIndex}
				index={activeQuestonIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}
