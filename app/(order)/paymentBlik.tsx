import React from 'react';
import { Pressable, View } from 'react-native';
import {
  BigHeading,
  BodyText,
  LargeText,
} from '../../components/typography/Typography';
import { blurhash } from '../../lib/constants';
import { Image } from 'expo-image';
import { useCartContext } from '../../lib/contexts/CartContext';
import { TextInput } from 'react-native-gesture-handler';
import { router } from 'expo-router';

const PaymentBlik = () => {
  const { state, dispatch } = useCartContext();

  const handleExecutePayment = () => {
    router.replace('/paymentBlikConfirmation');
  };

  return (
    <View className='px-12 py-8 h-screen w-full'>
      <View className='h-full w-full flex flex-col justify-center items-end'>
        <View
          style={{ gap: 48 }}
          className='w-full h-fit flex flex-col justify-center items-end'
        >
          <View style={{ gap: 8 }} className='flex flex-row'>
            <BodyText customClassName='text-gray'>Płacę z</BodyText>
            <Image
              placeholder={blurhash}
              source={require('../../assets/images/blik_logo.svg.png')}
              className='w-[100px] h-[50px] rounded-lg'
              contentFit='cover'
            />
          </View>
          <View style={{ gap: 16 }} className='flex flex-col items-end'>
            <BodyText customClassName='text-gray'>Food delivery app</BodyText>
            <BigHeading>{state.totalCost}zł</BigHeading>
          </View>
          <View className='w-full flex flex-row justify-between items-center'>
            <View className='flex flex-col'>
              <LargeText>Kod blik</LargeText>
              <BodyText customClassName='text-red-600'>
                Skąd wziąć kod?
              </BodyText>
            </View>
            <TextInput
              placeholder='Wprowadź kod'
              className='py-4 px-8 border border-lightgray'
            />
          </View>
        </View>
        <BodyText customClassName='mt-4 text-red-600'>
          Płatność bez kodu
        </BodyText>
        <View
          style={{ gap: 32 }}
          className='flex flex-row mt-4 items-center justify-center'
        >
          <BodyText>Anuluj</BodyText>
          <Pressable
            onPress={handleExecutePayment}
            className='px-8 py-4 bg-red-600 rounded-2xl'
          >
            <BodyText customClassName='text-white'>Wykonaj</BodyText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PaymentBlik;
