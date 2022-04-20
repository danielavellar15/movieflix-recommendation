import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { api } from "../config/apiBD";
import theMovieDb from "../lib/themoviedb-javascript-library/themoviedb";

const ItemContainer = styled.button`
	width: 200px;
	background-color: white;
	margin-right: 20px;
	border-radius: 3px;
	padding: 0px;
	border: 0px;
`;

const ItemImage = styled.img`
	width: 100%;
	height: 100%;
`;

const urlBaseImg = "https://image.tmdb.org/t/p/w500";
const urlMovie = "/movies";

const Item = (props) => {
	const [movie, setMovie] = useState({});
	const { itemDetails } = props;
	let history = useHistory();

	useEffect(() => {
		getMovieDetails(itemDetails.id_origin);
	}, [itemDetails.id_origin]);

	const getMovieDetails = function (itemId) {
		api.get(urlMovie + "?id=" + itemId).then(function (response) {
			theMovieDb.movies.getById(
				{ id: response.data[0].tmdbId },
				(movie_return) => {
					setMovie(JSON.parse(movie_return));
				},
				(error) => {
					console.log("error :>> ", error);
				}
			);
		});
	};

	function handleOnClick() {
		history.push("/movie", {
			details: movie,
		});
	}

	return (
		<>
			<ItemContainer onClick={handleOnClick}>
				<ItemImage src={urlBaseImg + movie.poster_path}></ItemImage>
			</ItemContainer>
		</>
	);
};

export default Item;
