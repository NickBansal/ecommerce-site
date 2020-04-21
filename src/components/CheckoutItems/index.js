import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;

	.name,
	.quantity,
	.price {
		width: 23%;
	}

	.quantity {
		padding-left: 20px;
	}

	.remove-button {
		padding-left: 12px;
		cursor: pointer;
		outline: none;
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

const CheckoutItem = ({
	cartItem: { name, imageUrl, price, quantity, id },
	removeItems
}) => (
	<Container>
		<Image>
			<img src={imageUrl} alt="item" />
		</Image>
		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
		<div
			className="remove-button"
			role="button"
			tabIndex={0}
			onClick={() => removeItems({ name, imageUrl, price, quantity, id })}
			onKeyDown={() => {}}
		>
			&#10005;
		</div>
	</Container>
);

export default CheckoutItem;
