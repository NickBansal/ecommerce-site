import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
	border: 1px solid black;
	padding: 4px;
	margin-bottom: 20px;
	color: white;
	background: orangered;
	text-align: center;
	font-weight: bold;
	border-radius: 5px;
	letter-spacing: 0.5px;
`;

const FormError = ({ children }) => <Error>{children}</Error>;

export default FormError;
