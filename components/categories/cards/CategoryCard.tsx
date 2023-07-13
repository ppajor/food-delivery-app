import React from 'react';
import { View } from 'react-native';
import HamburgerIcon from '../../../assets/icons/hamburger.svg';
import { BodyText } from '../../typography/Typography';
import Blob from '../../../assets/svgs/category-blob.svg';
import globalStyles from '../../../lib/globalStyles';
interface CategoryCardProps {
  name: string;
}

export const CategoryCard = ({ name }: CategoryCardProps) => {
  return (
    <View
      style={globalStyles.shadow}
      className='flex flex-col items-center justify-center bg-white w-[83px] h-[100px] rounded-lg'
    >
      <HamburgerIcon width={36} height={36} />
      <View className='absolute top-0 mt-4 opacity-75'>
        <Blob width={36} height={36} />
      </View>
      <BodyText customClassName='text-black text-sm mt-2'>{name}</BodyText>
    </View>
  );
};
