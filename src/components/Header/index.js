import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userActions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils';

import CartIcon from './CartIcon';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoStyled = styled(Logo)`
	height: 100%;
	width: 70px;
	padding: 10px;
`;

const Options = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	.option {
		padding: 10px 15px;
		cursor: pointer;
	}
`;

const Header = ({ currentUser, setUser }) => (
	<Container>
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
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events
				<div
					className="option"
					tabIndex="0"
					role="button"
					onClick={() => {
						auth.signOut();
						setUser(null);
					}}
				>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin" className="option">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</Options>
	</Container>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
