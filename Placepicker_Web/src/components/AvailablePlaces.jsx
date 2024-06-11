import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			try {
				const places = await fetchAvailablePlaces();
				navigator.geolocation.getCurrentPosition(
					(position) => {
						console.log('geolocaiton');
						const sortedPlaces = sortPlacesByDistance(
							places,
							position.coords.latitude,
							position.coords.longitude
						);
						setAvailablePlaces(sortedPlaces);
						setIsFetching(false);
					},
					(error) => {
						console.log(error.message);
					}
				);
			} catch (error) {
				setError({
					message:
						error.message ||
						'Could not fetch places, please try again later.',
				});
				setIsFetching(false);
			}
		}
		fetchPlaces();
	}, []);

	if (error) {
		return (
			<Error
				title={'An error occured'}
				message={error.message}
			/>
		);
	}
	return (
		<Places
			title='Available Places'
			places={availablePlaces}
			isLoading={isFetching}
			loadingText='Fetching place data...'
			fallbackText='No places available.'
			onSelectPlace={onSelectPlace}
		/>
	);
}