import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MenuItem from './MenuItem';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DirMenu = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const HomePage = () => {
	const sections = useSelector(state => state.cart.sections);
	return (
		<Container>
			<DirMenu>
				{sections.map(({ id, ...rest }) => (
					<MenuItem key={id} {...rest} />
				))}
			</DirMenu>
		</Container>
	);
};

export default HomePage;
