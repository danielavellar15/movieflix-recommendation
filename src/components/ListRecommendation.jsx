import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRecommendation } from "../services/recommendation";
import Item from "./Item";

const ListFlex = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`;

const ListContainer = styled.div`
	padding: 0px;
`;

const ListTitle = styled.h2`
	color: white;
`;

const ListRecommendation = (props) => {
	const [details, setDetails] = useState([]);

	const { listTitle, limit } = props;

	useEffect(() => {
		getRecommendation(null, limit).then((result) => {
			if (result) {
				setDetails(result.data);
			}
		});
	}, [props]);

	return (
		<>
			<ListContainer>
				<ListTitle> {listTitle} </ListTitle>
				<ListFlex>
					{details.map((item) => {
						return <Item key={item.id} itemDetails={item}></Item>;
					})}
				</ListFlex>
			</ListContainer>
		</>
	);
};

export default ListRecommendation;
