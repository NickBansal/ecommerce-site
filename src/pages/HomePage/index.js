import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import options from './options';

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

const HomePage = () => (
	<Container>
		<DirMenu>
			{options.map(({ id, ...rest }) => (
				<MenuItem key={id} {...rest} />
			))}
		</DirMenu>
	</Container>
);

export default HomePage;
