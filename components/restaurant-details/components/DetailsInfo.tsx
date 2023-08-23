import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { BodyText, MediumHeading } from '../../typography/Typography';
import Blob from '../../../assets/svgs/category-blob.svg';
import { Restaurant } from '../../../lib/types';

type DetailsInfoProps = Pick<
  Restaurant,
  'deliveryPrice' | 'rating' | 'ratingCount' | 'deliveryTime'
>;

const DetailsInfo = ({
  deliveryTime,
  rating,
  ratingCount,
  deliveryPrice,
}: DetailsInfoProps) => {
  return (
    <View className='flex flex-row justify-around'>
      <View className='items-center basis-1/3'>
        <View className='items-center justify-center'>
          <View className='absolute top-0 opacity-75'>
            <Blob width={36} height={36} />
          </View>
          <Ionicons
            name='time-outline'
            size={24}
            color='#FF8D28'
            className='mb-1'
          />
        </View>
        <MediumHeading customClassName='text-black'>
          {deliveryTime} min
        </MediumHeading>
      </View>
      <View className='items-center basis-1/3'>
        <Ionicons name='star' size={24} color='#F2C94C' className='mb-1' />
        <MediumHeading customClassName='text-black'>{rating}</MediumHeading>
        <BodyText customClassName='text-gray'>({ratingCount})</BodyText>
      </View>
      <View className='items-center basis-1/3'>
        <View className='items-center justify-center'>
          <View className='absolute top-0 opacity-75'>
            <Blob width={36} height={36} />
          </View>
          <MaterialCommunityIcons
            name='bike-fast'
            size={24}
            color='#FF8D28'
            className='mb-1'
          />
        </View>
        <MediumHeading customClassName='text-black'>
          {deliveryPrice}zł
        </MediumHeading>
      </View>
    </View>
  );
};

export default DetailsInfo;
