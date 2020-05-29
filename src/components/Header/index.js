import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { auth } from '../../firebase/utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../Carts/Icon';
import CartDropDown from '../Carts/DropDown';

import CurrentUserContext from '../../context/currentUser';
import { CartContext } from '../../context/cart/index';

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

const Header = () => {
	const currentUser = useContext(CurrentUserContext);
	const { hidden, toggleHidden } = useContext(CartContext);

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
							onClick={() => auth.signOut()}
						>
							SIGN OUT
						</div>
					) : (
						<Link to="/signin" className="option">
							SIGN IN
						</Link>
					)}
					<CartIcon toggleHidden={toggleHidden} />
				</Options>
			</Container>
			{!hidden && <CartDropDown />}
		</>
	);
};

export default Header;
