import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HDHuHDmCCI2ICdZgy7TaADzwQdU6YWHhP2sdhKWUx0Wsc6B2BjyOMABV5WMhgZs8WCeHBogb7y7uYJLSjXLSQ7f00ghu7Xpv5'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return(
    <StripeCheckout 
      label='PayNow'
      name='Allison Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;