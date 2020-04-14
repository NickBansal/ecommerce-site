import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	.content {
		height: 90px;
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid black;

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
`;

const MenuItem = ({ title }) => (
	<Item>
		<div className="content">
			<div className="title">{title}</div>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</Item>
);

export default MenuItem;
