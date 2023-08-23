import React from 'react';
import { View } from 'react-native';

interface SeparatorProps {
  customClassName?: string;
}

export const Separator = ({ customClassName }: SeparatorProps) => {
  return (
    <View className={`${customClassName} w-full h-[1px] bg-[#F8F8F8]`}></View>
  );
};

export default Separator;
