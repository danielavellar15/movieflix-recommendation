import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListFlex = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`;

const ListContainer = styled.div`
	width: 100%;
	height: 250px;
	padding: 10px;
`;

const ListTitle = styled.h2`
	color: white;
`;

const List = (props) => {
	const details = [
		{
			id: 3,
			imdbId: "0113228",
			tmdbId: 15602,
		},
		{
			id: 1,
			imdbId: "0114709",
			tmdbId: 862,
		},
	];

	return (
		<>
			<ListContainer>
				<ListTitle> {props.listTitle} </ListTitle>
				<ListFlex>
					{details.map((item) => {
						return <Item key={item.id} itemDetails={item}></Item>;
					})}
				</ListFlex>
			</ListContainer>
		</>
	);
};

export default List;
