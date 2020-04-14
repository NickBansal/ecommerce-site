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

const options = ['HATS', 'JACKETS', 'SHOES', 'WOMENS', 'MENS'];

const HomePage = () => (
	<Container>
		<h1>Welcome to my Homepage</h1>
		<DirMenu>
			{options.map(o => (
				<MenuItem title={o} />
			))}
		</DirMenu>
	</Container>
);

export default HomePage;
