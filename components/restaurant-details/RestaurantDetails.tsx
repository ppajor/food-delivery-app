import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { BigHeading, BodyText, SmallText } from '../typography/Typography';
import Separator from '../separator/Separator';
import { Restaurant } from '../../lib/types';
import DetailsInfo from './components/DetailsInfo';
import CategoriesContent from './components/CategoriesContent';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useCartContext } from '../../lib/contexts/CartContext';

interface RestaurantDetailsProps {
  item: Restaurant;
}

const restaurantMenuCategories = [
  {
    name: 'Pizza',
    id: 1,
    items: [
      {
        id: 1,
        name: 'Pizza Palmeriana',
        price: 27.99,
        currency: 'zł',
        description: 'ser, oregano, szynka, parmezan, pieczarki, salami',
      },
      {
        id: 2,
        name: 'Pizza Palmeriana',
        price: 27.99,
        currency: 'zł',
        description: 'ser, oregano, szynka, parmezan, pieczarki, salami',
      },
      {
        id: 3,
        name: 'Pizza Palmeriana',
        price: 27.99,
        currency: 'zł',
        description: 'ser, oregano, szynka, parmezan, pieczarki, salami',
      },
    ],
  },
  { name: 'Burgery', id: 2 },
  { name: 'Sałatki', id: 3 },
  { name: 'Zestawy', id: 4 },
];

export const RestaurantDetails = ({ item }: RestaurantDetailsProps) => {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const { state, dispatch } = useCartContext();

  return (
    <ScrollView>
      <View className='w-full h-full'>
        <View className='w-full h-[25vh] flex items-center overflow-hidden'>
          <Image
            placeholder={blurhash}
            source={require('../../assets/images/pizza-buffa.png')}
            className='w-full h-full'
            contentFit='cover'
          />
          <View className='absolute bottom-[-24px] flex justify-center items-center w-[84px] h-[84px] rounded-full bg-[rgba(255,255,255,1)]'>
            <Image
              placeholder={blurhash}
              source={require('../../assets/images/pizza-buffa-logo.png')}
              className='w-[42px] h-[22px] '
              contentFit='cover'
            />
          </View>
        </View>
        <View className='p-4'>
          <View className='mb-5'>
            <BigHeading customClassName='text-center'>{item.name}</BigHeading>
          </View>
          <DetailsInfo
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            ratingCount={item.ratingCount}
            deliveryPrice={item.deliveryPrice}
          />
          <Separator customClassName='mt-6 mb-2' />

          <CategoriesContent menuCategories={restaurantMenuCategories} />
        </View>
        <View className='absolute bottom-3 w-[72px] h-[72px] py-1 bg-green flex flex-col items-center rounded-full'>
          <Ionicons name='cart-outline' size={24} color='white' />
          <SmallText customClassName='text-white'>
            {state.totalCost}zł
          </SmallText>
          <SmallText customClassName='text-white'>{state.itemsCount}</SmallText>
        </View>
      </View>
    </ScrollView>
  );
};
