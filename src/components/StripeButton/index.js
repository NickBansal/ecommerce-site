import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { CartContext } from '../../context/cart';

const StripeButton = ({ price }) => {
	const { emptyCart } = useContext(CartContext);
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_CXDPdTpBGh3d5iaS8yHnIdFG00Y0v2XEN0';

	const onToken = () => {
		alert('Payment successful');
		emptyCart();
	};

	return (
		<StripeCheckout
			name="E-commerce"
			amount={priceForStripe}
			label="Pay now"
			billingAddress
			shippingAddress
			currency="GBP"
			image="https://stripe.com/img/documentation/checkout/marketplace.png"
			description={`Your total is £${price}`}
			panelLabel="Pay now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
