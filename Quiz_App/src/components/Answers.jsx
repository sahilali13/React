import { useRef } from 'react';

export default function Answers({
	answers,
	selectedAnswer,
	answerState,
	onSelect,
}) {
	const shuffledAnswers = useRef();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort(() => Math.random() - 0.5);
	}

	return (
		<ul
			// id="answers"
			className='list-none m-0 p-0 flex flex-col items-center gap-2'
		>
			{shuffledAnswers.current.map((answer) => {
				const isSelected = selectedAnswer === answer;
				let buttonCss =
					'inline-block w-full font-roboto-condensed text-[0.9rem] py-4 px-8 border-none rounded-3xl cursor-pointer transition-all duration-200  bg-blue-400 hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white';

				if (answerState === 'answered' && isSelected) {
					buttonCss +=
						' bg-orange-300 text-gray-800 hover:bg-orange-300 hover:text-gray-800 focus:bg-orange-300 focus:text-gray-800';
					console.log(buttonCss);
				}

				if (isSelected) {
					if (answerState === 'correct') {
						buttonCss +=
							' bg-green-300 text-gray-800 hover:bg-green-300 hover:text-gray-800 focus:bg-green-300 focus:text-gray-800';
					} else if (answerState === 'wrong') {
						buttonCss +=
							' bg-pink-500 text-gray-800 hover:bg-pink-500 hover:text-gray-800 focus:bg-pink-500 focus:text-gray-800';
					}
				}
				return (
					<li
						key={answer}
						className=' w-[90%] my-0 mx-auto'
					>
						<button
							onClick={() => onSelect(answer)}
							className={buttonCss}
							disabled={answerState !== ''}
						>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
