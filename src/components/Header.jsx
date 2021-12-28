import React from "react";
import styled from "styled-components";

export const Title = styled.a`
	color: #e50914;
	margin-left: 10px;
	text-decoration: none;
	font-size: xxx-large;
	font-weight: 500;
`;

export default function Header() {
	return (
		<>
			<Title href="/">MovieFlix</Title>
		</>
	);
}
