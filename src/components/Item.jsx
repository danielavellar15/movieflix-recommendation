import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import theMovieDb from "../lib/themoviedb-javascript-library/themoviedb";

const ItemContainer = styled.button`
	width: 200px;
	height: 300px;
	background-color: white;
	margin-right: 20px;
	border-radius: 3px;
`;

const ItemImage = styled.img`
	width: 100%;
	height: 100%;
`;

const Item = (props) => {
	const [movie, setMovie] = useState({});
	const { itemDetails } = props;
	let history = useHistory();

	useEffect(() => {
		getMovieDetails(itemDetails.tmdbId);
	}, [itemDetails.tmdbId]);

	const getMovieDetails = function (itemId) {
		theMovieDb.movies.getById(
			{ id: itemId },
			(movie_return) => {
				//console.log("movie :>> ", movie_return);
				setMovie(JSON.parse(movie_return));
			},
			(error) => {
				console.log("error :>> ", error);
			}
		);
	};

	function handleOnClick() {
		history.push("/movie", {
			details: movie,
		});
	}

	return (
		<>
			<ItemContainer onClick={handleOnClick}>
				<ItemImage src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}></ItemImage>
			</ItemContainer>
		</>
	);
};

export default Item;
