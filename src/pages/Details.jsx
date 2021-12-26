import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
	color: #ffffff;
	margin-left: 10px;
`;

export default function Details(props) {
	const { details } = props.location.state;
	console.log("movie :>> ", props.location.state);
	return (
		<>
			<Title>{details.original_title}</Title>
		</>
	);
}
