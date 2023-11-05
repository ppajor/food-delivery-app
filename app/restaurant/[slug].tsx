import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import { Pressable, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

import { RestaurantDetails } from '../../components/restaurant-details/RestaurantDetails';
import { Restaurant as RestaurantType } from '../../lib/types';
import { SmallText } from '../../components/typography/Typography';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

function Restaurant() {
  const item = useLocalSearchParams();
  console.log('item', item);
  //TODO: try to implement it in header in layout.tsx
  const handleBack = () => {
    router.back();
  };
  return (
    <ScrollView
      style={{ marginTop: Constants.statusBarHeight }}
      className='flex-1 w-full bg-[#FDFDFD]'
    >
      <Pressable
        onPress={handleBack}
        className='absolute left-5 top-5 w-full z-[15] flex flex-row items-center gap-2'
      >
        <AntDesign name='arrowleft' size={20} color='white' />
        <SmallText customClassName='text-white'>back</SmallText>
      </Pressable>
      <RestaurantDetails item={item as unknown as RestaurantType} />
    </ScrollView>
  );
}

export default Restaurant;
