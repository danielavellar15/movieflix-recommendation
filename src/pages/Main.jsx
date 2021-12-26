import React from "react";
import styled from "styled-components";
import List from "../components/List";

export const Title = styled.h1`
	color: #e50914;
	margin-left: 10px;
`;

export default function MainPage() {
	return (
		<>
			<Title>MovieFlix</Title>
			<List></List>
		</>
	);
}
