import React, { ReactNode, useRef, useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { CategoryCard } from './cards/CategoryCard';
import { ScrollView } from 'react-native-gesture-handler';

interface CategoriesProps {
  openCategoriesModal: () => void;
  items: {
    name: string;
    icon: ReactNode;
  }[];
}

export const Categories = ({ openCategoriesModal, items }: CategoriesProps) => {
  return (
    <View className='py-8 '>
      <View className='flex flex-row justify-between'>
        <BigHeading customClassName='mb-4'>Na co masz ochotę?</BigHeading>
        <Pressable onPress={() => openCategoriesModal()}>
          <BodyText customClassName='text-orange'>Wszystkie</BodyText>
        </Pressable>
      </View>
      <ScrollView horizontal>
        <View style={{ gap: 8 }} className='flex flex-row pb-2'>
          {items.map(({ name, icon }, idx) => (
            <CategoryCard key={idx} name={name} icon={icon} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
