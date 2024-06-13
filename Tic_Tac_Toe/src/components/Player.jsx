import { useState } from 'react';
export default function Player({
	initialName,
	symbol,
	isActive,
	onNameChange,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	function handleEditClick() {
		setIsEditing((isEditing) => !isEditing);
		isEditing && onNameChange(symbol, playerName);
	}

	function handleSave(event) {
		setPlayerName(event.target.value);
	}

	return (
		<li
			// className={isActive ? 'active' : undefined}
			className={
				'flex items-center w-1/2 border-2 border-solid border-transparent' +
				(isActive ? ' border-yellow-300 animate-pulse ease-in-out' : '')
			}
		>
			<span
				// className='player'
				className='border-2 border-solid border-transparent p-2 rounded font-bold'
			>
				{!isEditing ? (
					<span
						// className='player-name'
						className={
							'inline-block w-40 text-base text-orange-100 uppercase m-0 p-2 rounded text-ellipsis text-center' +
							(isActive ? ' text-yellow-300' : '')
						}
					>
						{playerName}
					</span>
				) : (
					<input
						type='text'
						required
						value={playerName}
						onChange={handleSave}
						className='text-inherit text-base w-40 border-none p-2 animate-pulse-text bg-gray-700 text-center uppercase'
					/>
				)}
				<span
					// className='player-symbol'
					className={
						'ml-4 text-base text-orange-100' +
						(isActive ? ' text-yellow-300' : '')
					}
				>
					{symbol}
				</span>
			</span>
			<button
				className='w-12 border-none bg-none text-yellow-500 text-[0.9rem] cursor-pointer transition-[color] duration-200 pt-2 px-1 pb-1 text-center hover:text-yellow-400'
				onClick={handleEditClick}
			>
				{!isEditing ? 'Edit' : 'Save'}
			</button>
		</li>
	);
}
