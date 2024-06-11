import { log } from '../../log.js';

export default function CounterOutput({ value }) {
	log('<CounterOutput /> rendered', 2);

	const cssClass =
		'text-5xl font-bold' +
		(value >= 0 ? ' text-cyan-200' : ' text-red-300');
	return <span className={cssClass}>{value}</span>;
}
