import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
	removeItemsFromCart,
	decreaseItems,
	increaseItems
} from '../../redux/cart/actions';

const Container = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;

	.name,
	.price {
		width: 23%;
	}

	.remove-button {
		padding-left: 12px;
		cursor: pointer;
		outline: none;
	}

	.quantity {
		width: 23%;

		&::selection {
			color: none;
			background: none;
		}
	}
`;

const Arrow = styled.span`
	padding: 5px;
	cursor: ${({ notAllowed }) => (notAllowed ? 'not-allowed' : 'pointer')}
	color: lightgrey;
	pointer-events: 

	&:hover {
		color: ${({ notAllowed }) => (notAllowed ? 'none' : 'black')};
	}

	&::selection {
		color: none;
		background: none;
	}
	
`;

const Image = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const CheckoutItems = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const dispatch = useDispatch();

	return (
		<Container>
			<Image>
				<img src={imageUrl} alt="item" />
			</Image>
			<span className="name">{name}</span>
			<div className="quantity">
				<Arrow
					onClick={() => dispatch(decreaseItems(cartItem))}
					notAllowed={quantity === 1}
				>
					&#10094;
				</Arrow>
				{quantity}
				<Arrow onClick={() => dispatch(increaseItems(cartItem))}>
					&#10095;
				</Arrow>
			</div>
			<span className="price">£{price}</span>
			<div
				className="remove-button"
				role="button"
				tabIndex={0}
				onClick={() => dispatch(removeItemsFromCart(cartItem))}
				onKeyDown={() => {}}
			>
				&#10005;
			</div>
		</Container>
	);
};

export default CheckoutItems;
