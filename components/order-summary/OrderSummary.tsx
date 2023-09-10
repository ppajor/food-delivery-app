import React from 'react';
import { View } from 'react-native';
import { BodyText, LargeText } from '../typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Separator from '../separator/Separator';
type OrderSummaryProps = {
  orderValue: number;
};

const OrderSummary = ({ orderValue }: OrderSummaryProps) => {
  return (
    <View className='py-6'>
      <View className='flex flex-row justify-between mb-3'>
        <View className='flex flex-row gap-2 items-center'>
          <MaterialIcons name='fastfood' size={24} color='#FF8D28' />
          <BodyText>Wartość zamówienia</BodyText>
        </View>
        <BodyText>{orderValue}</BodyText>
      </View>
      <View className='flex flex-row justify-between mb-7'>
        <View className='flex flex-row gap-2 items-center'>
          <MaterialCommunityIcons
            name='bike-fast'
            size={24}
            color='#FF8D28'
            className='mb-1'
          />
          <BodyText>Wysyłka</BodyText>
        </View>
        <BodyText>{orderValue}</BodyText>
      </View>
      <View className='flex flex-row justify-between items-center'>
        <View className='flex flex-row gap-2'>
          <BodyText>Suma</BodyText>
        </View>
        <LargeText>{orderValue + orderValue}</LargeText>
      </View>
    </View>
  );
};

export default OrderSummary;
