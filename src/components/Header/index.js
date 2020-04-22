import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from '../../redux/user/actions';
import { selectCurrentUser } from '../../redux/user/selectors';
import { selectCartHidden } from '../../redux/cart/selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils';

import CartIcon from '../Carts/Icon';
import CartDropDown from '../Carts/DropDown';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	z-index: 100;
	top: 0;
	left: 0;
	background: lightgrey;
	opacity: 0.7;
	padding: 10px;
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

const Header = ({ currentUser, setUser, isDropdownHidden }) => (
	<>
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
		{isDropdownHidden && <CartDropDown />}
	</>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isDropdownHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
