import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { Restaurant } from '../../lib/types';
import { BodyText, SmallTagText, TagText } from '../typography/Typography';

type ListingItemProps = {
  item: Restaurant;
};

export const ListingItem = ({ item }: ListingItemProps) => {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View className='w-full bg-white'>
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
          <TagText>{item.name}</TagText>
          <SmallTagText>{item.rating}</SmallTagText>
        </View>
        <View style={{ gap: 8 }} className='flex flex-row'>
          <SmallTagText customClassName='text-gray'>
            {item.deliveryTime[0]}-{item.deliveryTime[1]}min
          </SmallTagText>
          <SmallTagText customClassName='text-gray'>
            {item.deliveryPrice}
          </SmallTagText>
        </View>
      </View>
    </View>
  );
};
