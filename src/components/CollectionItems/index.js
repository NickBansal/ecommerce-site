import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	width: 22%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;

	.image {
		width: 100%;
		height: 95%;
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;
	}
`;

const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;

	.name {
		width: 90%;
		margin-bottom: 15px;
	}

	.price {
		width: 10%;
	}
`;

const CollectionItem = ({ name, price, imageUrl }) => (
	<Item>
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<Footer>
			<span className="name">{name}</span>
			<span className="price">£{price}</span>
		</Footer>
	</Item>
);

export default CollectionItem;
