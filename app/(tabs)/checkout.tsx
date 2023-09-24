import React, { useState } from 'react';

import { router } from 'expo-router';
import Cart from '../../components/cart/Cart';

export default function Checkout() {
  const handleOrderSubmit = () => {
    router.push('/orderFinished');
  };

  return <Cart onOrderSubmit={handleOrderSubmit} />;
}
