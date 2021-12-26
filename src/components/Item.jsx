import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
	width: 200px;
	height: 300px;
	background-color: white;
	margin-right: 20px;
	border-radius: 3px;
`;

const ItemImage = styled.img`
	width: 100%;
	height: 100%;
`;

const Item = (props) => {
	return (
		<>
			<ItemContainer>
				<ItemImage src="https://img.olhardigital.com.br/wp-content/uploads/2021/11/MATRIX-RESURRECTIONS-691x1024.jpg"></ItemImage>
			</ItemContainer>
		</>
	);
};

export default Item;
