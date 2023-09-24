import React from 'react';

import { router } from 'expo-router';
import Cart from '../../components/cart/Cart';

export default function Checkout() {
  const handleOrderSubmit = (paymentOption: string | null) => {
    console.log('opt', paymentOption);

    paymentOption === 'onDelivery'
      ? router.replace('/orderFinished')
      : router.push('paymentBlik');
  };
  return <Cart onOrderSubmit={handleOrderSubmit} />;
}
