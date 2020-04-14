import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
`;

const DirMenu = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const MenuItem = styled.div`
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

const HomePage = () => (
	<Container>
		<h1>Welcome to my Homepage</h1>
		<DirMenu>
			<MenuItem>
				<div className="content">
					<div className="title">HATS</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</MenuItem>
			<MenuItem>
				<div className="content">
					<div className="title">JACKETS</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</MenuItem>
			<MenuItem>
				<div className="content">
					<div className="title">SHOES</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</MenuItem>
			<MenuItem>
				<div className="content">
					<div className="title">WOMENS</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</MenuItem>
			<MenuItem>
				<div className="content">
					<div className="title">MENS</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</MenuItem>
		</DirMenu>
	</Container>
);

export default HomePage;
