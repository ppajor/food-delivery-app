import React from 'react';
import { Container } from '../../components/layout/Layout';
import { useCartContext } from '../../lib/contexts/CartContext';
import MenuCategoryItem from '../../components/restaurant-details/components/MenuCategoryItem';

export default function Checkout() {
  const { state, dispatch } = useCartContext();
  console.log('state tems', state.items);
  return (
    <Container>
      <>
        {state.items.map((item) => (
          <MenuCategoryItem item={item} behaviour='remove' />
        ))}
      </>
    </Container>
  );
}
