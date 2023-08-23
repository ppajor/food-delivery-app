import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { Restaurant } from '../../lib/types';
import { SmallTagText, TagText } from '../typography/Typography';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyles from '../../lib/globalStyles';

type ListingItemProps = {
  item: Restaurant;
};

export const ListingItem = ({ item }: ListingItemProps) => {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={[globalStyles.shadow]} className='w-full bg-white'>
      <View className='w-full h-[166px] flex items-center'>
        <Image
          placeholder={blurhash}
          source={require('../../assets/images/pizza-buffa.png')}
          className='w-full h-full rounded-lg'
          contentFit='cover'
        />
        <View className='absolute bottom-[-12px] flex justify-center items-center w-[54px] h-[54px] rounded-full bg-[rgba(255,255,255,0.62)]'>
          <Image
            placeholder={blurhash}
            source={require('../../assets/images/pizza-buffa-logo.png')}
            className='w-[42px] h-[22px] '
            contentFit='cover'
          />
        </View>
      </View>

      <View style={{ gap: 8 }} className='flex flex-col pt-2 px-5 pb-5'>
        <View className='flex flex-row justify-between items-baseline'>
          <TagText customClassName='text-bold'>{item.name}</TagText>
          <View className='flex flex-row gap-1 items-center'>
            <Ionicons name='star' size={16} color='#F2C94C' />
            <SmallTagText>{item.rating}</SmallTagText>
          </View>
        </View>
        <View style={{ gap: 8 }} className='flex flex-row'>
          <View className='flex flex-row gap-1'>
            <Ionicons name='time-outline' size={16} color='#FF8D28' />
            <SmallTagText customClassName='text-gray'>
              {item.deliveryTime} min
            </SmallTagText>
          </View>
          <View className='flex flex-row gap-1'>
            <MaterialCommunityIcons
              name='bike-fast'
              size={16}
              color='#FF8D28'
            />
            <SmallTagText customClassName='text-gray'>
              {item.deliveryPrice}zł
            </SmallTagText>
          </View>
        </View>
      </View>
    </View>
  );
};
