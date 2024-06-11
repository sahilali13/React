export default function UserInput({ onChange, input }) {
	const rowCss = 'flex justify-evenly gap-6';
	const labelCss =
		'block mb-1 font-roboto-condensed text-[0.5rem] font-bold uppercase';
	const inputCss =
		'w-full p-2 border border-solid border-teal-400 rounded-[0.25rem] bg-transparent text-teal-100 text-base';
	return (
		<section
			// id='user-input'
			className='p-4 max-w-[30rem] my-8 mx-auto rounded bg-gradient-to-b from-teal-700 to-emerald-600'
		>
			<div className={rowCss}>
				<p>
					<label className={labelCss}>Initial Investment</label>
					<input
						className={inputCss}
						type='number'
						required
						value={input.initialInvestment}
						onChange={(event) =>
							onChange('initialInvestment', event.target.value)
						}
					/>
				</p>
				<p>
					<label className={labelCss}>Annual Investment</label>
					<input
						className={inputCss}
						type='number'
						required
						value={input.annualInvestment}
						onChange={(event) =>
							onChange('annualInvestment', event.target.value)
						}
					/>
				</p>
			</div>
			<div className={rowCss + ' pt-1'}>
				<p>
					<label className={labelCss}>Expected Return</label>
					<input
						className={inputCss}
						type='number'
						required
						value={input.expectedReturn}
						onChange={(event) =>
							onChange('expectedReturn', event.target.value)
						}
					/>
				</p>
				<p>
					<label className={labelCss}>Duration</label>
					<input
						className={inputCss}
						type='number'
						required
						value={input.duration}
						onChange={(event) =>
							onChange('duration', event.target.value)
						}
					/>
				</p>
			</div>
		</section>
	);
}
