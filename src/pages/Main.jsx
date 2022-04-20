import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ListRecommendation from "../components/ListRecommendation";

export const Title = styled.h1`
	color: #e50914;
	margin-left: 10px;
`;

export const Container = styled.div`
	padding: 20px;
`;

export default function MainPage() {
	return (
		<Container>
			<Header></Header>
			<ListRecommendation listTitle="Melhores do mês" limit="6"></ListRecommendation>
			<ListRecommendation listTitle="Com base no seu histórico" limit="6"></ListRecommendation>
		</Container>
	);
}
