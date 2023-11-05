import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { BodyText } from '../../typography/Typography';
import Blob from '../../../assets/svgs/category-blob.svg';
import globalStyles from '../../../lib/globalStyles';
import { Image } from 'expo-image';

interface CategoryCardProps {
  name: string;
  icon: ReactNode;
}

export const CategoryCard = ({ name, icon }: CategoryCardProps) => {
  return (
    <View
      style={globalStyles.shadow}
      className='flex flex-col items-center justify-center bg-white w-[83px] h-[100px] rounded-lg'
    >
      <Image
        width={36}
        height={36}
        source={icon}
        className='z-[10] w-9 h-9 opacity-75'
        contentFit='cover'
      />
      <View className='absolute top-0 mt-4 opacity-75'>
        <Blob width={36} height={36} />
      </View>
      <BodyText customClassName='text-black text-sm mt-2'>{name}</BodyText>
    </View>
  );
};
