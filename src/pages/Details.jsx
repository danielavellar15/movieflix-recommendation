import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ListRecommendation from "../components/ListRecommendation";

const Container = styled.div`
	padding: 20px;
	color: #ffffff;
`;
const TitlePage = styled.h1`
	color: #ffffff;
`;

const TitleMovie = styled.h1`
	margin: 0px;
`;

const DetailsContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const FolderMovieContainer = styled.div`
	width: 15%;
	height: auto;
`;

const DetailsTextContainer = styled.div`
	width: 80%;
	height: auto;
	margin-left: 10px;
`;

const FolderMovie = styled.img`
	width: 100%;
	height: 100%;
`;

const ReviewMovie = styled.span`
	color: #f6ca2a;
`;

const GenresMovieContainer = styled.div``;

const GenresMovie = styled.span`
	border: 1px solid;
	border-color: white;
`;

const DescriptionMovie = styled.p``;
const DateMovie = styled.p``;
const urlBaseImg = "https://image.tmdb.org/t/p/w500";

export default function Details(props) {
	const { details } = props.location.state;
	return (
		<>
			<Container>
				<Header></Header>
				<TitlePage>Detalhes</TitlePage>
				<DetailsContainer>
					<FolderMovieContainer>
						<FolderMovie src={urlBaseImg + details.poster_path} />
					</FolderMovieContainer>
					<DetailsTextContainer>
						<TitleMovie>
							{details.original_title} <ReviewMovie>{details.vote_average}</ReviewMovie>
						</TitleMovie>
						<DescriptionMovie>
							<b>Sinopse: </b>
							{details.overview}
						</DescriptionMovie>
						<DateMovie>
							<b>Data de Lançamento: </b> {details.release_date}
						</DateMovie>
					</DetailsTextContainer>
				</DetailsContainer>
				<ListRecommendation listTitle="Você pode gostar também" limit="7"></ListRecommendation>
			</Container>
		</>
	);
}
