import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';

function App() {
	const selectedPlace = useRef();

	const [userPlaces, setUserPlaces] = useState([]);

	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState();

	const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			try {
				const places = await fetchUserPlaces();
				setUserPlaces(places);
			} catch (error) {
				setError({
					message: error.message || 'Failed to fetch user places',
				});
			}
			setIsFetching(false);
		}
		fetchPlaces();
	}, []);

	function handleStartRemovePlace(place) {
		setModalIsOpen(true);
		selectedPlace.current = place;
	}

	function handleStopRemovePlace() {
		setModalIsOpen(false);
	}

	async function handleSelectPlace(selectedPlace) {
		setUserPlaces((prevPickedPlaces) => {
			if (!prevPickedPlaces) {
				prevPickedPlaces = [];
			}
			if (
				prevPickedPlaces.some((place) => place.id === selectedPlace.id)
			) {
				return prevPickedPlaces;
			}
			return [selectedPlace, ...prevPickedPlaces];
		});

		try {
			await updateUserPlaces([selectedPlace, ...userPlaces]);
		} catch (error) {
			setUserPlaces(userPlaces);
			setErrorUpdatingPlaces({
				message: error.message || 'Failed to update places',
			});
		}
	}

	const handleRemovePlace = useCallback(
		async function handleRemovePlace() {
			setUserPlaces((prevPickedPlaces) =>
				prevPickedPlaces.filter(
					(place) => place.id !== selectedPlace.current.id
				)
			);
			try {
				await updateUserPlaces(
					userPlaces.filter(
						(place) => place.id !== selectedPlace.current.id
					)
				);
			} catch (error) {
				setUserPlaces(userPlaces);
				setErrorUpdatingPlaces({
					message: error.message || 'Failed to delete place',
				});
			}

			setModalIsOpen(false);
		},
		[userPlaces]
	);

	function handleError() {
		setErrorUpdatingPlaces(null);
	}

	return (
		<>
			<Modal
				open={errorUpdatingPlaces}
				onClose={handleError}
			>
				{errorUpdatingPlaces && (
					<Error
						title='An error occurred'
						message={errorUpdatingPlaces.message}
						onConfirm={handleError}
						isModalError
					/>
				)}
			</Modal>

			<Modal
				open={modalIsOpen}
				onClose={handleStopRemovePlace}
			>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header className='text-center flex flex-col items-center'>
				<img
					className='w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]'
					src={logoImg}
					alt='Stylized globe'
				/>
				<h1 className='m-0 text-[3rem] uppercase tracking-[1rem]'>
					PlacePicker
				</h1>
				<p className='my-0 mx-auto text-[1.15rem] max-w-[38ch] text-gray-400'>
					Create your personal collection of places you would like to
					visit or you have visited.
				</p>
			</header>
			<main>
				{error && (
					<Error
						title='An error occured!'
						message={error.message}
					/>
				)}
				{!error && (
					<Places
						title="I'd like to visit ..."
						fallbackText='Select the places you would like to visit below.'
						places={userPlaces}
						onSelectPlace={handleStartRemovePlace}
						isLoading={isFetching}
						loadingText='Fethcing your places...'
					/>
				)}

				<AvailablePlaces onSelectPlace={handleSelectPlace} />
			</main>
		</>
	);
}

export default App;