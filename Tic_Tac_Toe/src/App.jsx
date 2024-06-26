import { useState } from 'react';

import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS = { X: 'Player 1', O: 'Player 2' };

const INTITAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}
	return currentPlayer;
}

function deriveGameBoard(gameTurns) {
	let gameBoard = [...INTITAL_GAME_BOARD.map((array) => [...array])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	return gameBoard;
}

function deriveWinner(gameBoard, players) {
	let winner = null;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}
	return winner;
}

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, setTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);

	const gameBoard = deriveGameBoard(gameTurns);

	const winner = deriveWinner(gameBoard, players);

	const hasDraw = gameTurns.length === 9 && !winner;

	function handleSelectTile(rowIndex, colIndex) {
		setTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);

			const updatedTurns = [
				{
					square: { row: rowIndex, col: colIndex },
					player: currentPlayer,
				},
				...prevTurns,
			];

			return updatedTurns;
		});
	}

	function handleRestart() {
		setTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => {
			return { ...prevPlayers, [symbol]: newName };
		});
	}

	return (
		<main>
			<div className='max-w-[45rem] my-12 mx-auto p-8 rounded-md bg-gradient-to-t from-gray-700 to-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative'>
				<ol
					// id='players'
					// className='highlight-player'
					className='list-none p-0 m-0 my-4 mx-0 flex justify-center items-center gap-8'
				>
					<Player
						initialName={PLAYERS.X}
						symbol={'X'}
						isActive={activePlayer === 'X'}
						onNameChange={handlePlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol={'O'}
						isActive={activePlayer === 'O'}
						onNameChange={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver
						winner={winner}
						onRestart={handleRestart}
					/>
				)}
				<GameBoard
					onSelectTile={handleSelectTile}
					board={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
