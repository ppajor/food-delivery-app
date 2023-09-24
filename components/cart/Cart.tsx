import React, { useState } from 'react';
import { Container } from '../../components/layout/Layout';
import { useCartContext } from '../../lib/contexts/CartContext';
import MenuCategoryItem from '../../components/restaurant-details/components/MenuCategoryItem';
import OrderSummary from '../../components/order-summary/OrderSummary';
import Separator from '../../components/separator/Separator';
import PaymentOptions from '../../components/payment-options/PaymentOptions';
import { Pressable, View } from 'react-native';
import {
  BodyText,
  MediumHeading,
} from '../../components/typography/Typography';
import { PaymentOption } from '../../lib/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CartProps = {
  onOrderSubmit: (paymentOption: string | null) => void;
};

export default function Cart({ onOrderSubmit }: CartProps) {
  const { state, dispatch } = useCartContext();
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<PaymentOption | null>(null);

  const handleFinishOrderPress = () => {
    onOrderSubmit(selectedPaymentOption);
  };
  return (
    <Container>
      {state.totalCost > 0 ? (
        <>
          {state.items.map((item) => (
            <MenuCategoryItem key={item.id} item={item} behaviour='remove' />
          ))}
          <OrderSummary orderValue={state.totalCost} />
          <Separator />
          <PaymentOptions
            selected={selectedPaymentOption}
            setOption={(option) => setSelectedPaymentOption(option)}
          />
          <Pressable
            style={{
              backgroundColor: !selectedPaymentOption ? '#FFCD83' : '#FF8D28',
            }}
            disabled={!selectedPaymentOption}
            onPress={handleFinishOrderPress}
            className='py-3 rounded-lg mt-6'
          >
            <MediumHeading customClassName='text-center text-white'>
              Zamów i zapłać
            </MediumHeading>
          </Pressable>
        </>
      ) : (
        <View className='h-screen w-full items-center justify-center gap-2'>
          <MaterialCommunityIcons name='cart-outline' size={96} color='gray' />
          <BodyText>Koszyk jest pusty, dodaj produkty do koszyka</BodyText>
        </View>
      )}
    </Container>
  );
}
