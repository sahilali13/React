import quizCompleteImage from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
	const skippedAnswers = userAnswers.filter((answer) => answer === null);
	const correctAnswers = userAnswers.filter(
		(answer, index) => answer === QUESTIONS[index].answers[0]
	);

	const skippedAnswersShare = Math.round(
		(skippedAnswers.length / userAnswers.length) * 100
	);
	const correctAnswersShare = Math.round(
		(correctAnswers.length / userAnswers.length) * 100
	);
	const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

	return (
		<div className='max-w-[40rem] my-8 mx-auto p-8 bg-gradient-to-b from-violet-400 to-violet-500 text-gray-900 rounded-lg shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)] animate-slide-in-from-bottom'>
			<img
				className='block w-32 h-32 object-contain mt-0 mb-4 mx-auto p-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] border-2 border-solid border-indigo-900 rounded-[50%] bg-purple-400'
				src={quizCompleteImage}
				alt='Trophy Icon'
			/>
			<h2 className='font-roboto text-5xl text-center m-0 uppercase text-indigo-900'>
				Quiz Completed!
			</h2>
			<div className='flex gap-12 w-[60%] my-8 mx-auto pb-8 border-b-2 border-solid border-blue-900'>
				<p className='flex flex-1 flex-col m-0'>
					<span className='font-roboto-condensed text-5xl text-blue-900'>
						{skippedAnswersShare}%
					</span>
					<span className='font-roboto-condensed uppercase text-[0.8rem] text-gray-800 ml-[0.2rem] tracking-[0.1rem]'>
						skipped
					</span>
				</p>
				<p className='flex flex-1 flex-col m-0'>
					<span className='font-roboto-condensed text-5xl text-blue-900'>
						{correctAnswersShare}%
					</span>
					<span className='font-roboto-condensed uppercase text-[0.8rem] text-gray-800 ml-[0.2rem] tracking-[0.1rem]'>
						answered correctly
					</span>
				</p>
				<p className='flex flex-1 flex-col m-0'>
					<span className='font-roboto-condensed text-5xl text-blue-900'>
						{wrongAnswersShare}%
					</span>
					<span className='font-roboto-condensed uppercase text-[0.8rem] text-gray-800 ml-[0.2rem] tracking-[0.1rem]'>
						answered incorrectly
					</span>
				</p>
			</div>
			<ol className='list-none my-8 mx-auto p-0 text-center'>
				{userAnswers.map((answer, index) => {
					let cssAnswer = 'my-1 mx-0 font-roboto-condensed font-bold';
					if (answer === null) {
						cssAnswer += ' text-purple-300 font-normal';
					} else if (answer === QUESTIONS[index].answers[0]) {
						cssAnswer += ' text-emerald-900';
					} else {
						cssAnswer += ' text-pink-900';
					}
					return (
						<li
							key={index}
							className='my-8 mx-0'
						>
							<h3 className='font-roboto-condensed text-base my-0 mx-auto flex justify-center items-center bg-gray-800 text-violet-200 w-8 h-8 rounded-[50%]'>
								{index + 1}
							</h3>
							<p className='my-1 mx-0 text-base text-gray-800'>
								{QUESTIONS[index].text}
							</p>
							<p className={cssAnswer}>{answer ?? 'Skipped'}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
