import React from 'react';
import styled from 'styled-components';

import SignInForm from '../../components/Form/SignIn';
import SignUp from '../../components/Form/SignUp';

const Container = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
`;

const SignIn = () => (
	<Container>
		<SignInForm />
		<SignUp />
	</Container>
);

export default SignIn;
