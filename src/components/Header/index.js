import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoStyled = styled(Logo)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

const Options = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;

	.option {
		padding: 10px 15px;
	}
`;

const Header = ({ currentUser }) => (
	<Container>
		{console.log(currentUser)}
		<Link to="/">
			<LogoStyled />
		</Link>
		<Options>
			<Link to="/shop" className="option">
				SHOP
			</Link>
			<Link to="/contact" className="option">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin" className="option">
					SIGN IN
				</Link>
			)}
		</Options>
	</Container>
);

export default Header;
