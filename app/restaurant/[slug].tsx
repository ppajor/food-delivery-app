import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import { ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { RestaurantDetails } from '../../components/restaurant-details/RestaurantDetails';
import { Restaurant as RestaurantType } from '../../lib/types';
import { CartProvider } from '../../lib/contexts/CartContext';

function Restaurant() {
  const item = useLocalSearchParams();
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <ScrollView
      style={{ marginTop: Constants.statusBarHeight }}
      className='flex-1 w-full bg-[#FDFDFD]'
    >
      <RestaurantDetails item={item as unknown as RestaurantType} />
    </ScrollView>
  );
}

export default Restaurant;
