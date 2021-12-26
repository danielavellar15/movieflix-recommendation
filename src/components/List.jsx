import React from "react";
import styled from "styled-components";
import Item from "./Item";

export const ListContainer = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: row;
	padding: 10px;
`;

const List = (props) => {
	return (
		<>
			<ListContainer>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
			</ListContainer>
		</>
	);
};

export default List;
