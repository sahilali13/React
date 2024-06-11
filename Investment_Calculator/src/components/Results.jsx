import { calculateInvestmentResults, formatter } from '../util/investment';
export default function Results({ input }) {
	const resultsData = calculateInvestmentResults(input);
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].annualInvestment -
		resultsData[0].interest;
	return (
		<table
			// id='result'
			className='max-w-[50rem] my-8 mx-auto p-4 table-fixed border-spacing-4 text-right'
		>
			<thead className='text-[0.7rem] text-emerald-300'>
				<tr>
					<th className='pr-4'>Year</th>
					<th className='pr-4'>Investment Value</th>
					<th className='pr-4'>Interest (Year)</th>
					<th className='pr-4'>Total Interest</th>
					<th className='pr-4'>Invested Capital</th>
				</tr>
			</thead>
			<tbody className='font-roboto-condensed font-[0.85rem] text-teal-100'>
				{resultsData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAmountInterested =
						yearData.valueEndOfYear - totalInterest;
					return (
						<tr key={yearData.year}>
							<td className='pr-4'>{yearData.year}</td>
							<td className='pr-4'>
								{formatter.format(yearData.valueEndOfYear)}
							</td>
							<td className='pr-4'>
								{formatter.format(yearData.interest)}
							</td>
							<td className='pr-4'>
								{formatter.format(totalInterest)}
							</td>
							<td className='pr-4'>
								{formatter.format(totalAmountInterested)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
