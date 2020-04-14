import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

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

const options = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1,
		linkUrl: 'shop/hats'
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2,
		linkUrl: 'shop/jackets'
	},
	{
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		id: 3,
		linkUrl: 'shop/sneakers'
	},
	{
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		size: 'large',
		id: 4,
		linkUrl: 'shop/womens'
	},
	{
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		size: 'large',
		id: 5,
		linkUrl: 'shop/mens'
	}
];

const HomePage = () => (
	<Container>
		<h1>Welcome to my Homepage</h1>
		<DirMenu>
			{options.map(({ title, id, imageUrl, size }) => (
				<MenuItem
					title={title}
					key={id}
					imageUrl={imageUrl}
					size={size}
				/>
			))}
		</DirMenu>
	</Container>
);

export default HomePage;
