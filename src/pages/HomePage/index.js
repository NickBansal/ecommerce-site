import React, { useContext } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

import OptionsContext from '../../context/options';

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
	const options = useContext(OptionsContext);
	return (
		<Container>
			<DirMenu>
				{options.map(({ id, ...rest }) => (
					<MenuItem key={id} {...rest} />
				))}
			</DirMenu>
		</Container>
	);
};

export default HomePage;
