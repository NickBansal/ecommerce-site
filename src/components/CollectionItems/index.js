import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItemsToCart } from '../../redux/cart/actions';

import CustomButton from '../CustomButton';

const Item = styled.div`
	width: 22%;
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
		top: 250px;
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

const CollectionItem = ({ name, price, imageUrl, id, addCartItems }) => (
	<Item>
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<CustomButton
			onClick={() => {
				addCartItems({
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

const mapDispatchToProps = dispatch => ({
	addCartItems: cartItems => dispatch(addItemsToCart(cartItems))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
