import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from './MenuItem';

import { selectSections } from '../../redux/directory/selectors';

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

const HomePage = ({ sections }) => (
	<Container>
		<DirMenu>
			{sections.map(({ id, ...rest }) => (
				<MenuItem key={id} {...rest} />
			))}
		</DirMenu>
	</Container>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections
});

export default connect(mapStateToProps)(HomePage);
