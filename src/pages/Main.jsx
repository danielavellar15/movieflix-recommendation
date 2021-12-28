import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import List from "../components/List";

export const Title = styled.h1`
	color: #e50914;
	margin-left: 10px;
`;

export default function MainPage() {
	return (
		<>
			<Header></Header>
			<List listTitle="Mais vistos"></List>
			<br />
			<br />
			<br />
			<br />
			<br />
			<List listTitle="Novidades"></List>
		</>
	);
}
