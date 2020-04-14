import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	min-width: 30%;
	height: ${({ size }) => (size ? '380px' : '240px')};
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	.background-image {
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: cover;
	}

	.content {
		height: 90px;
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid black;
		background: white;
		opacity: 0.7;
		position: absolute;

		&:hover {
			opacity: 0.9;
		}

		.title {
			font-weight: bold;
			margin-bottom: 6px;
			font-size: 22px;
			color: #4a4a4a;
		}

		.subtitle {
			font-weight: lighter;
			font-size: 16px;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	&:hover {
		cursor: pointer;

		.background-image {
			transform: scale(1.1);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		.content {
			opacity: 0.9;
		}
	}
`;

const MenuItem = ({ title, imageUrl, size }) => (
	<Item size={size}>
		<div
			className="background-image"
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="content">
			<div className="title">{title.toUpperCase()}</div>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</Item>
);

export default MenuItem;
