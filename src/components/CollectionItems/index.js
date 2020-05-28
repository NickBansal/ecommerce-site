import React, { useContext } from 'react';
import styled from 'styled-components';

import CustomButton from '../CustomButton';

import { CartContext } from '../../provider/cart';

const Item = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	box-shadow: 0px 0px 3px grey;

	.image {
		width: 100%;
		height: 95%;
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;
	}

	.custom-button {
		width: 80%;
		opacity: 0;
		position: absolute;
		top: 230px;
	}

	&:hover {
		.image {
			opacity: 0.8;
			transition: opacity 0.3s linear;
		}

		.custom-button {
			opacity: 0.7;
			transition: opacity 0.3s linear;
		}
	}
`;

const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	padding: 10px;
`;

const CollectionItems = ({ name, price, imageUrl, id }) => {
	const { addItem } = useContext(CartContext);

	return (
		<Item>
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<CustomButton
				onClick={() => {
					addItem({
						name,
						price,
						imageUrl,
						id
					});
				}}
				className="custom-button"
				inverted
			>
				{' '}
				ADD TO CART{' '}
			</CustomButton>
			<Footer>
				<span className="name">{name}</span>
				<span className="price">£{price}</span>
			</Footer>
		</Item>
	);
};

export default CollectionItems;
