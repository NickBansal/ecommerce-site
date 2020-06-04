import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { signOutStart } from '../../redux/user/actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIconContainer from '../Carts/Icon/container';
import CartDropDownContainer from '../Carts/DropDown/container';

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
	opacity: 0.8;
	padding: 10px 20px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
	}
`;

const LogoStyled = styled(Logo)`
	height: 100%;
	width: 70px;
	padding: 10px;
`;

const Options = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	.option {
		padding: 10px 15px;
		cursor: pointer;
	}
`;

const Header = ({ hidden }) => {
	const currentUser = useSelector(state => state.user.currentUser);

	const dispatch = useDispatch();

	return (
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
							onClick={() => dispatch(signOutStart())}
						>
							SIGN OUT
						</div>
					) : (
						<Link to="/signin" className="option">
							SIGN IN
						</Link>
					)}
					<CartIconContainer />
				</Options>
			</Container>
			{hidden && <CartDropDownContainer />}
		</>
	);
};

export default Header;
